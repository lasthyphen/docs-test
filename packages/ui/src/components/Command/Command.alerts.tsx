import { Alert } from 'ui'
import { Microscope } from 'lucide-react'

export const AiWarning = ({ className }: { className?: string }) => (
  <Alert
    variant="info"
    title="Still very young & wet behind the circuits."
    className={className}
    icon={<Microscope strokeWidth={1.5} size={18} className="text-scale-900" />}
  >
    <p>HAL is continuously being trained & fine tuned.</p>
  </Alert>
)

export const IncludeSchemaAlert = () => (
  <Alert
    variant={'warning'}
    title="Project metadata (tables, columns, and data types) is being shared with OpenAI"
    withIcon
    className="mx-3"
  >
    Start a new conversation to change this configuration
  </Alert>
)

export const ExcludeSchemaAlert = () => (
  <Alert
    variant={'info'}
    title="Project metadata (tables, columns, and data types) is not being shared with OpenAI"
    withIcon
    className="mx-3"
  >
    Start a new conversation to change this configuration
  </Alert>
)
