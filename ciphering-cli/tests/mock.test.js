// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals'

const userErrorMock = jest.fn()

jest.unstable_mockModule('../src/UserError', () => ({
  default: userErrorMock
}))

const { default: execute } = await import('../src/execute')

test('Mock UserError', async () => {
  try {
    await execute(['-c'])
  } catch (error) {
    expect(userErrorMock).toHaveBeenCalledTimes(1)
  }
})
