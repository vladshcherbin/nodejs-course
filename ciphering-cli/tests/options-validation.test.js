import validateOptions from '../src/options-validation'

test('Validate single option', async () => {
  await expect(validateOptions({ config: 'A' })).resolves.toStrictEqual({
    config: 'A'
  })
})

test('Validate multiple options', async () => {
  await expect(validateOptions({ config: 'A', input: 'input.txt' })).resolves.toStrictEqual({
    config: 'A',
    input: 'input.txt'
  })
})

test('Throw error when "config" option is missing', async () => {
  await expect(validateOptions({})).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "config" value is missing', async () => {
  await expect(validateOptions({ config: true })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "config" options has wrong value', async () => {
  await expect(validateOptions({ config: 'C1-B' })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "input" value is missing', async () => {
  await expect(validateOptions({ config: 'A', input: true })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "input" file is missing', async () => {
  await expect(validateOptions({ config: 'A', input: 'missing.txt' })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "input" file is a directory', async () => {
  await expect(validateOptions({ config: 'A', input: 'src' })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "output" value is missing', async () => {
  await expect(validateOptions({ config: 'A', output: true })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "output" file is missing', async () => {
  await expect(validateOptions({ config: 'A', output: 'missing.txt' })).rejects.toThrowErrorMatchingSnapshot()
})

test('Throw error when "output" file is a directory', async () => {
  await expect(validateOptions({ config: 'A', output: 'src' })).rejects.toThrowErrorMatchingSnapshot()
})
