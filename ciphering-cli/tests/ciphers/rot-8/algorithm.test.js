import { decode, encode } from '../../../src/ciphers/rot-8/algorithm'

test('Encode using rot-8 algorithm', () => {
  expect(encode('Hello World! :)')).toBe('Pmttw Ewztl! :)')
})

test('Decode using rot-8 algorithm', () => {
  expect(decode('Pmttw Ewztl! :)')).toBe('Hello World! :)')
})
