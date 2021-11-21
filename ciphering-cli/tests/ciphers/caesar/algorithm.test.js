import { decode, encode } from '../../../src/ciphers/caesar/algorithm'

test('Encode using caesar algorithm', () => {
  expect(encode('Hello World! :)')).toBe('Ifmmp Xpsme! :)')
})

test('Decode using caesar algorithm', () => {
  expect(decode('Ifmmp Xpsme! :)')).toBe('Hello World! :)')
})
