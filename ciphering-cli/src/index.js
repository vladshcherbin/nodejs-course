import UserError from './UserError'
import execute from './execute'

try {
  await execute(process.argv.slice(2))
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error instanceof UserError ? error.message : 'Unexpected error')

  process.exit(1)
}
