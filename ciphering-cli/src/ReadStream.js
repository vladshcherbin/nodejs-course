/* eslint-disable no-underscore-dangle */
import fs from 'fs'
import { Readable } from 'stream'

class ReadStream extends Readable {
  constructor(filename) {
    super()

    this.filename = filename
    this.fd = null
  }

  _construct(callback) {
    fs.open(this.filename, (error, fd) => {
      this.fd = fd

      callback()
    })
  }

  _read(n) {
    const buffer = Buffer.alloc(n)

    fs.read(this.fd, buffer, 0, n, null, (error, bytesRead) => {
      this.push(bytesRead > 0 ? buffer.slice(0, bytesRead) : null)
    })
  }

  _destroy(error, callback) {
    fs.close(this.fd, (closeError) => callback(closeError || error))
  }
}

export default ReadStream
