import fs from 'fs/promises'
import execute from '../src/execute'

beforeEach(async () => {
  await fs.truncate('output.txt')
})

afterAll(async () => {
  await fs.truncate('output.txt')
})

test('All ciphers example', async () => {
  await execute(['-c', 'A-C1-C0-R1-R0-A', '-i', 'input.txt', '-o', 'output.txt'])

  const fileContents = await fs.readFile('output.txt', { encoding: 'utf8' })

  expect(fileContents).toBe('This is secret. Message about "_" symbol!\n')
})
