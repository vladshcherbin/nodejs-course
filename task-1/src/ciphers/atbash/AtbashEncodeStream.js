/* eslint-disable class-methods-use-this, no-underscore-dangle */
import { Transform } from 'stream'
import encode from './algorithm'

class AtbashEncodeStream extends Transform {
  _transform(chunk, _, callback) {
    try {
      callback(null, encode(chunk.toString()))
    } catch (err) {
      callback(err)
    }
  }
}

export default AtbashEncodeStream
