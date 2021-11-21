// eslint-disable-next-line import/no-unresolved
import { pipeline } from 'stream/promises'
import ReadStream from './ReadStream'
import UserError from './UserError'
import WriteStream from './WriteStream'
import parseArguments from './arguments-parser'
import {
  AtbashEncodeStream,
  CaesarDecodeStream,
  CaesarEncodeStream,
  Rot8DecodeStream,
  Rot8EncodeStream
} from './ciphers'
import validateOptions from './options-validation'

try {
  const options = parseArguments(process.argv.slice(2))
  const { config, input, output } = await validateOptions(options)

  const patterns = config.split('-').map((value) => {
    switch (value) {
      case 'A':
        return new AtbashEncodeStream()
      case 'C0':
        return new CaesarDecodeStream()
      case 'C1':
        return new CaesarEncodeStream()
      case 'R0':
        return new Rot8DecodeStream()
      case 'R1':
        return new Rot8EncodeStream()
      default:
        throw new Error('Unknown "config" pattern')
    }
  })

  await pipeline(
    input ? new ReadStream(input) : process.stdin,
    ...patterns,
    output ? new WriteStream(output) : process.stdout
  )
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error instanceof UserError ? error.message : 'Unexpected error')

  process.exit(1)
}
