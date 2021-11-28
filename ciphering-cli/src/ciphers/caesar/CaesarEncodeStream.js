/* eslint-disable class-methods-use-this, no-underscore-dangle */
import { Transform } from 'stream'
import { encode } from './algorithm'

class CaesarEncodeStream extends Transform {
  _transform(chunk, _, callback) {
    callback(null, encode(chunk.toString()))
  }
}

export default CaesarEncodeStream
