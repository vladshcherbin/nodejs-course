import { exec } from 'child_process'
import fs from 'fs/promises'
import { promisify } from 'util'

const execute = promisify(exec)

function generateCliCommand(args) {
  return `node --experimental-specifier-resolution=node src ${args}`
}

describe('Error scenarios', () => {
  test('Throw error on duplicate "config" argument', async () => {
    await expect(execute(generateCliCommand('-c C1-C1 -c A')))
      .rejects
      .toThrow('"config" option is duplicated')
  })

  test('Throw error on missing "config" argument', async () => {
    await expect(execute(generateCliCommand()))
      .rejects
      .toThrow('"config" option is missing')
  })

  test('Throw error on missing "input" file', async () => {
    await expect(execute(generateCliCommand('-c A -i missing.txt')))
      .rejects
      .toThrow('"input" file doesn\'t exist, no permission or is a directory')
  })

  test('Throw error on "output" directory', async () => {
    await expect(execute(generateCliCommand('-c A -o missing')))
      .rejects
      .toThrow('"output" file doesn\'t exist, no permission or is a directory')
  })

  test('Throw error on incorrect "config" value', async () => {
    await expect(execute(generateCliCommand('-c C1-B')))
      .rejects
      .toThrow('"config" option contains wrong value')
  })
})

describe('Success scenarios', () => {
  test('Pass on correct "config" value', async () => {
    const { stdout } = await execute(generateCliCommand('-c C1-C1 -i input.txt'))

    expect(stdout).toMatch('Vjku ku ugetgv. Oguucig cdqwv "_" uaodqn!')
  })

  describe('Task 1 examples', () => {
    beforeEach(async () => {
      await fs.truncate('output.txt')
    })

    afterAll(async () => {
      await fs.truncate('output.txt')
    })

    test('Example 1', async () => {
      await execute(generateCliCommand('-c C1-C1-R0-A -i ./input.txt -o ./output.txt'))

      const fileContents = await fs.readFile('output.txt', { encoding: 'utf8' })

      expect(fileContents).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!\n')
    })

    test('Example 2', async () => {
      await execute(generateCliCommand('-c C1-C0-A-R1-R0-A-R0-R0-C1-A -i ./input.txt -o ./output.txt'))

      const fileContents = await fs.readFile('output.txt', { encoding: 'utf8' })

      expect(fileContents).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!\n')
    })

    test('Example 3', async () => {
      await execute(generateCliCommand('-c A-A-A-R1-R0-R0-R0-C1-C1-A -i ./input.txt -o ./output.txt'))

      const fileContents = await fs.readFile('output.txt', { encoding: 'utf8' })

      expect(fileContents).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!\n')
    })

    test('Example 4', async () => {
      await execute(generateCliCommand('-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i ./input.txt -o ./output.txt'))

      const fileContents = await fs.readFile('output.txt', { encoding: 'utf8' })

      expect(fileContents).toBe('This is secret. Message about "_" symbol!\n')
    })
  })
})
