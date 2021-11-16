class UserError extends Error {
  constructor(message, ...parameters) {
    super(message, ...parameters)

    this.name = 'UserError'
    this.message = message
  }
}

export default UserError
