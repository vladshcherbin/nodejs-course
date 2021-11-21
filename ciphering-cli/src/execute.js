// eslint-disable-next-line import/no-unresolved
import { pipeline } from 'stream/promises'
import ReadStream from './ReadStream'
import WriteStream from './WriteStream'
import parseArguments from './arguments-parser'
import parseConfig from './config-parser'
import validateOptions from './options-validation'

export default async function execute(args) {
  const options = parseArguments(args)
  const { config, input, output } = await validateOptions(options)
  const ciphers = parseConfig(config)

  await pipeline(
    input ? new ReadStream(input) : process.stdin,
    ...ciphers,
    output ? new WriteStream(output) : process.stdout
  )
}
