import { SignUpController } from './SignUp'
import { MissingParamError } from '../errors/missing-param-erro'

describe('Signup Controller', () => {
  test('Shoud return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'Danilo',
        email: 'danilo@gmail.com',
        password: 'facu12345',
        passwordConfirmation: 'facu12345'
      }
    }

    const httppResponse = sut.handle(httpRequest)
    expect(httppResponse.statusCode).toBe(400)
    expect(httppResponse.body).toEqual(new MissingParamError('name'))
  })
  test('Shoud return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Danilo',
        // email: 'danilo@gmail.com',
        password: 'facu12345',
        passwordConfirmation: 'facu12345'
      }
    }

    const httppResponse = sut.handle(httpRequest)
    expect(httppResponse.statusCode).toBe(400)
    expect(httppResponse.body).toEqual(new MissingParamError('email'))
  })
  test('Shoud return 400 if no password is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Danilo',
        email: 'danilo@gmail.com',
        // password: 'facu12345',
        passwordConfirmation: 'facu12345'
      }
    }

    const httppResponse = sut.handle(httpRequest)
    expect(httppResponse.statusCode).toBe(400)
    expect(httppResponse.body).toEqual(new MissingParamError('password'))
  })
})
