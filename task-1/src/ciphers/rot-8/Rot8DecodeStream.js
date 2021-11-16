/* eslint-disable class-methods-use-this, no-underscore-dangle */
import { Transform } from 'stream'
import { decode } from './algorithm'

class Rot8DecodeStream extends Transform {
  _transform(chunk, _, callback) {
    try {
      callback(null, decode(chunk.toString()))
    } catch (err) {
      callback(err)
    }
  }
}

export default Rot8DecodeStream
