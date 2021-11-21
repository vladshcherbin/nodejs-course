import {
  AtbashEncodeStream,
  CaesarDecodeStream,
  CaesarEncodeStream,
  Rot8DecodeStream,
  Rot8EncodeStream
} from '../src/ciphers'
import parseConfig from '../src/config-parser'

test('Return atbash encode stream', () => {
  const ciphers = parseConfig('A')

  expect(ciphers[0]).toBeInstanceOf(AtbashEncodeStream)
})

test('Return caesar decode stream', () => {
  const ciphers = parseConfig('C0')

  expect(ciphers[0]).toBeInstanceOf(CaesarDecodeStream)
})

test('Return caesar encode stream', () => {
  const ciphers = parseConfig('C1')

  expect(ciphers[0]).toBeInstanceOf(CaesarEncodeStream)
})

test('Return rot-8 decode stream', () => {
  const ciphers = parseConfig('R0')

  expect(ciphers[0]).toBeInstanceOf(Rot8DecodeStream)
})

test('Return rot-8 encode stream', () => {
  const ciphers = parseConfig('R1')

  expect(ciphers[0]).toBeInstanceOf(Rot8EncodeStream)
})

test('Return multiple cipher streams', () => {
  const ciphers = parseConfig('A-C1')

  expect(ciphers[0]).toBeInstanceOf(AtbashEncodeStream)
  expect(ciphers[1]).toBeInstanceOf(CaesarEncodeStream)
})

test('Throw unknown pattern error', () => {
  expect(() => parseConfig('A-B')).toThrow('Unknown "config" pattern')
})
