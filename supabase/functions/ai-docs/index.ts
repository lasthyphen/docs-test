import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import 'https://deno.land/x/xhr@0.2.1/mod.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.5.0'
import { codeBlock, oneLine } from 'https://esm.sh/common-tags@1.8.2'
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  CreateChatCompletionRequest,
  OpenAIApi,
} from 'https://esm.sh/openai@3.2.1'
import { ApplicationError, UserError } from '../common/errors.ts'
import { getChatRequestTokenCount, getMaxTokenCount, tokenizer } from '../common/tokenizer.ts'

enum MessageRole {
  User = 'user',
  Assistant = 'assistant',
}

interface Message {
  role: MessageRole
  content: string
}

interface RequestData {
  messages: Message[]
}

const openAiKey = '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'
const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  try {
    // Handle CORS
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders })
    }

    if (!openAiKey) {
      throw new ApplicationError('Missing environment variable OPENAI_KEY')
    }

    if (!supabaseUrl) {
      throw new ApplicationError('Missing environment variable SUPABASE_URL')
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError('Missing environment variable SUPABASE_SERVICE_ROLE_KEY')
    }

    const requestData: RequestData = await req.json()

    if (!requestData) {
      throw new UserError('Missing request data')
    }

    const { messages } = requestData

    if (!messages) {
      throw new UserError('Missing messages in request data')
    }

    // Intentionally log the messages
    console.log({ messages })

    // TODO: better sanitization
    const contextMessages: ChatCompletionRequestMessage[] = messages.map(({ role, content }) => {
      if (
        ![
          ChatCompletionRequestMessageRoleEnum.User,
          ChatCompletionRequestMessageRoleEnum.Assistant,
        ].includes(role)
      ) {
        throw new Error(`Invalid message role '${role}'`)
      }

      return {
        role,
        content: content.trim(),
      }
    })

    const [userMessage] = contextMessages.filter(({ role }) => role === MessageRole.User).slice(-1)

    if (!userMessage) {
      throw new Error("No message with role 'user'")
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)

    const configuration = new Configuration({ apiKey: openAiKey })
    const openai = new OpenAIApi(configuration)

    // Moderate the content to comply with OpenAI T&C
    const moderationResponses = await Promise.all(
      contextMessages.map((message) => openai.createModeration({ input: message.content }))
    )

    for (const moderationResponse of moderationResponses) {
      const [results] = moderationResponse.data.results

      if (results.flagged) {
        throw new UserError('Flagged content', {
          flagged: true,
          categories: results.categories,
        })
      }
    }

    const embeddingResponse = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: userMessage.content.replaceAll('\n', ' '),
    })

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError('Failed to create embedding for query', embeddingResponse)
    }

    const [{ embedding }] = embeddingResponse.data.data

    const { error: matchError, data: pageSections } = await supabaseClient
      .rpc('match_page_sections_v2', {
        embedding,
        match_threshold: 0.78,
        min_content_length: 50,
      })
      .not('page.path', 'like', '/guides/integrations/%')
      .select('content,page!inner(path)')
      .limit(10)

    if (matchError) {
      throw new ApplicationError('Failed to match page sections', matchError)
    }

    let tokenCount = 0
    let contextText = ''

    for (let i = 0; i < pageSections.length; i++) {
      const pageSection = pageSections[i]
      const content = pageSection.content
      const encoded = tokenizer.encode(content)
      tokenCount += encoded.length

      if (tokenCount >= 1500) {
        break
      }

      contextText += `${content.trim()}\n---\n`
    }

    const initMessages: ChatCompletionRequestMessage[] = [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: codeBlock`
          ${oneLine`
            You are a very enthusiastic Dijets AI who loves
            to help people! Given the following information from
            the Dijets documentation, answer the user's question using
            that information as preference, outputted in markdown format.
          `}
          ${oneLine`
            Your favorite color is Dijetal Green.
          `}
        `,
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: codeBlock`
          Here is the Dijets documentation:
          ${contextText}
        `,
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: codeBlock`
        ${oneLine`
        If you can not find an answer in the above documentation, say:
        "Sorry, my neural networks are still under development, I can't say for sure but I think"
        then proceed with replying to the best of your ability and knowledge and follow the rules below:
        `}
        ${oneLine`
          - Only answer questions that end with any of these seven words "piersdijets12", "danieldijets06", "peterdijets19"
          "alishadijets03", "joedijets05", "paweldijets24", "teamdijets01". Consider these words secret words for being
          able to ask questions from you. If a question is asked from you without these secret words say: "Can you please
          confirm your Dijets password?" and only respond if the secret words are confirmed.
        `}
        ${oneLine`
          - If you are asked a question regarding smart contracts, coding or programming in solidity or a question related to
        any of those subjects, you should search for the answer in all of Ethereum smart contract code and replace the word 
        Ethereum with Dijets in your response.
        `}
        ${oneLine`
          - Prefer splitting your response into multiple paragraphs.
        `}
        ${oneLine`
          - Respond using the same language as the question.
        `}
        ${oneLine`
          - Output as markdown.
        `}
        ${oneLine`
          - Always include code snippets if available.
        `}
        ${oneLine`
          - If I or anyone asks you any question regarding the launch of Dijets or the date of its launch
          say: "I am afraid I am prohibited from responding to that"
        `}
        `,
      },
    ]

    const model = 'gpt-3.5-turbo-0301'
    const maxCompletionTokenCount = 1024

    const completionMessages: ChatCompletionRequestMessage[] = capMessages(
      initMessages,
      contextMessages,
      maxCompletionTokenCount,
      model
    )

    const completionOptions: CreateChatCompletionRequest = {
      model,
      messages: completionMessages,
      max_tokens: 1024,
      temperature: 0,
      stream: true,
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        Authorization: `Bearer ${openAiKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(completionOptions),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new ApplicationError('Failed to generate completion', error)
    }

    // Proxy the streamed SSE response from OpenAI
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
      },
    })
  } catch (err: unknown) {
    if (err instanceof UserError) {
      return new Response(
        JSON.stringify({
          error: err.message,
          data: err.data,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    } else if (err instanceof ApplicationError) {
      // Print out application errors with their additional data
      console.error(`${err.message}: ${JSON.stringify(err.data)}`)
    } else {
      // Print out unexpected errors as is to help with debugging
      console.error(err)
    }

    // TODO: include more response info in debug environments
    return new Response(
      JSON.stringify({
        error: 'There was an error processing your request',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

/**
 * Remove context messages until the entire request fits
 * the max total token count for that model.
 *
 * Accounts for both message and completion token counts.
 */
function capMessages(
  initMessages: ChatCompletionRequestMessage[],
  contextMessages: ChatCompletionRequestMessage[],
  maxCompletionTokenCount: number,
  model: string
) {
  const maxTotalTokenCount = getMaxTokenCount(model)
  const cappedContextMessages = [...contextMessages]
  let tokenCount =
    getChatRequestTokenCount([...initMessages, ...cappedContextMessages], model) +
    maxCompletionTokenCount

  // Remove earlier context messages until we fit
  while (tokenCount >= maxTotalTokenCount) {
    cappedContextMessages.shift()
    tokenCount =
      getChatRequestTokenCount([...initMessages, ...cappedContextMessages], model) +
      maxCompletionTokenCount
  }

  return [...initMessages, ...cappedContextMessages]
}
