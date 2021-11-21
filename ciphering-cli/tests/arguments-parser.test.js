import parseArguments from '../src/arguments-parser'

test('Return empty arguments object', () => {
  const args = []

  expect(parseArguments(args)).toStrictEqual({})
})

test('Return argument with no value', () => {
  const args = ['-c']

  expect(parseArguments(args)).toStrictEqual({
    config: true
  })
})

test('Return argument with value', () => {
  const args = ['-c', 'C1-R1']

  expect(parseArguments(args)).toStrictEqual({
    config: 'C1-R1'
  })
})

test('Return known arguments', () => {
  const args = ['-c', 'C1-A', '--input', 'input.txt', '-o', 'output.txt']

  expect(parseArguments(args)).toStrictEqual({
    config: 'C1-A',
    input: 'input.txt',
    output: 'output.txt'
  })
})

test('Skip unknown arguments', () => {
  const args = ['-c', 'C1-A', '-u', 'unknown']

  expect(parseArguments(args)).toStrictEqual({
    config: 'C1-A'
  })
})

test('Throw error on duplicate argument', () => {
  const args = ['-c', 'C1-A', '--config']

  expect(() => parseArguments(args)).toThrow('"config" option is duplicated')
})
