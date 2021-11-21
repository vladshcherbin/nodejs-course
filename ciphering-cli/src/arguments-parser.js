import UserError from './UserError'

function parseArgumentValue(argumentIndex, args) {
  const argumentValue = args[argumentIndex + 1]

  return (argumentValue && !argumentValue.startsWith('-')) ? argumentValue : true
}

function parseOption(option, flags, [argument, index], args, parsedArguments) {
  if (flags.includes(argument)) {
    if (parsedArguments[option]) {
      throw new UserError(`"${option}" option is duplicated`)
    }

    // eslint-disable-next-line no-param-reassign
    parsedArguments[option] = parseArgumentValue(index, args)
  }
}

export default function parseArguments(args) {
  const parsedArguments = {}

  args.forEach((...argument) => {
    parseOption('config', ['-c', '--config'], argument, args, parsedArguments)
    parseOption('input', ['-i', '--input'], argument, args, parsedArguments)
    parseOption('output', ['-o', '--output'], argument, args, parsedArguments)
  })

  return parsedArguments
}
