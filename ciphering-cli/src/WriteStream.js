/* eslint-disable no-underscore-dangle */
import fs from 'fs'
import { Writable } from 'stream'

class WriteStream extends Writable {
  constructor(filename) {
    super()

    this.filename = filename
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (error, fd) => {
      if (error) {
        callback(error)
      } else {
        this.fd = fd

        callback()
      }
    })
  }

  _write(chunk, _, callback) {
    fs.write(this.fd, chunk, callback)
  }

  _destroy(error, callback) {
    if (this.fd) {
      fs.close(this.fd, (closeError) => callback(closeError || error))
    } else {
      callback(error)
    }
  }
}

export default WriteStream
