import UserError from './UserError'

const parsedArguments = {}

function parseArgumentValue(argumentIndex, args) {
  const argumentValue = args[argumentIndex + 1]

  return (argumentValue && !argumentValue.startsWith('-')) ? argumentValue : true
}

function parseOption(option, flags, [argument, index], args) {
  if (flags.includes(argument)) {
    if (parsedArguments[option]) {
      throw new UserError(`"${option}" option is duplicated`)
    }

    parsedArguments[option] = parseArgumentValue(index, args)
  }
}

export default function parseArguments(args) {
  args.forEach((...argument) => {
    parseOption('config', ['-c', '--config'], argument, args)
    parseOption('input', ['-i', '--input'], argument, args)
    parseOption('output', ['-o', '--output'], argument, args)
  })

  return parsedArguments
}
