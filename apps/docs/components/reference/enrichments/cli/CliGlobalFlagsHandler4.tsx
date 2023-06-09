import RefSubLayout from '~/layouts/ref/RefSubLayout'


import spec from './cli_v4_commands.yaml' assert { type: 'yaml' }
import Param from '~/components/Params'
import Options from '~/components/Options'

const CliGlobalFlagsHandler4 = () => {
  return (
    <RefSubLayout.EducationRow className="not-prose">
      <RefSubLayout.Details>
        <h3 className="text-lg text-scale-1200 mb-3">Flags</h3>
        <ul className="">
          {spec.flags.map((flag) => {
            return (
              <Param
              {...flag} isOptional={!flag.required}>
              {flag?.accepted_values && (
                <Options>
                  {flag?.accepted_values.map((value) => {
                    return <Options.Option {...value} />
                  })}
                </Options>
              )}
              </Param>
            )
          })}
        </ul>
      </RefSubLayout.Details>

      <RefSubLayout.Examples></RefSubLayout.Examples>
    </RefSubLayout.EducationRow>
  )
}

export default CliGlobalFlagsHandler4
