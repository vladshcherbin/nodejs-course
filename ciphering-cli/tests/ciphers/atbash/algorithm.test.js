import encode from '../../../src/ciphers/atbash/algorithm'

test('Encode using atbash algorithm', () => {
  expect(encode('Hello World! :)')).toBe('Svool Dliow! :)')
})
