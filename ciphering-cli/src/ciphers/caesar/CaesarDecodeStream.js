/* eslint-disable class-methods-use-this, no-underscore-dangle */
import { Transform } from 'stream'
import { decode } from './algorithm'

class CaesarDecodeStream extends Transform {
  _transform(chunk, _, callback) {
    callback(null, decode(chunk.toString()))
  }
}

export default CaesarDecodeStream
