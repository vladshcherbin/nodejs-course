import fs from 'fs/promises'
import UserError from './UserError'

const validConfigOptions = ['A', 'C0', 'C1', 'R0', 'R1']

function validateConfigOption(option) {
  return option.split('-').every((value) => validConfigOptions.includes(value))
}

async function checkFile(path) {
  const file = await fs.open(path)
  const stats = await file.stat()

  if (stats.isDirectory()) {
    throw new Error('File is a directory')
  }
}

export default async function validateOptions(options) {
  const { config, input, output } = options

  if (!config) {
    throw new UserError('"config" option is missing')
  }

  if (config === true) {
    throw new UserError('"config" option value is missing')
  }

  if (!validateConfigOption(config)) {
    throw new UserError('"config" option contains wrong value')
  }

  if (input && input === true) {
    throw new UserError('"input" option value is missing')
  }

  if (input) {
    try {
      await checkFile(input)
    } catch (error) {
      throw new UserError('"input" file doesn\'t exist, no permission or is a directory')
    }
  }

  if (output && output === true) {
    throw new UserError('"output" option value is missing')
  }

  if (output) {
    try {
      await checkFile(output)
    } catch (error) {
      throw new UserError('"output" file doesn\'t exist, no permission or is a directory')
    }
  }

  return options
}
