/* eslint-disable class-methods-use-this, no-underscore-dangle */
import { Transform } from 'stream'
import { decode } from './algorithm'

class Rot8DecodeStream extends Transform {
  _transform(chunk, _, callback) {
    callback(null, decode(chunk.toString()))
  }
}

export default Rot8DecodeStream
