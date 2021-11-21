import {
  AtbashEncodeStream,
  CaesarDecodeStream,
  CaesarEncodeStream,
  Rot8DecodeStream,
  Rot8EncodeStream
} from './ciphers'

export default function parseConfig(config) {
  return config.split('-').map((value) => {
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
        throw new Error(`Unknown "config" pattern: ${value}`)
    }
  })
}
