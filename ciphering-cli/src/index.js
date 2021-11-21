// eslint-disable-next-line import/no-unresolved
import { pipeline } from 'stream/promises'
import ReadStream from './ReadStream'
import UserError from './UserError'
import WriteStream from './WriteStream'
import parseArguments from './arguments-parser'
import parseConfig from './config-parser'
import validateOptions from './options-validation'

try {
  const options = parseArguments(process.argv.slice(2))
  const { config, input, output } = await validateOptions(options)
  const ciphers = parseConfig(config)

  await pipeline(
    input ? new ReadStream(input) : process.stdin,
    ...ciphers,
    output ? new WriteStream(output) : process.stdout
  )
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error instanceof UserError ? error.message : 'Unexpected error')

  process.exit(1)
}
