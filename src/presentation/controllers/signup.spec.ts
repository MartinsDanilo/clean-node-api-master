import { SignUpController } from './SignUp'
import { MissingParamError } from '../errors/missing-param-erro'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('Signup Controller', () => {
  test('Shoud return 400 if no name is provided', () => {
    const sut = makeSut()
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
  test('Shoud return 400 if an invalid email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'Danilo',
        email: 'invalid_email@mail.com',
        password: 'facu12345',
        passwordConfirmation: 'facu12345'
      }
    }

    const httppResponse = sut.handle(httpRequest)
    expect(httppResponse.statusCode).toBe(400)
    //parei em 4:40 
    expect(httppResponse.body).toEqual(new InvalidParamError('email'))
  })
  test('Shoud return 400 if no password is provided', () => {
    const sut = makeSut()
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

  test('Shoud return 400 if no passwordConfirmation is providedConfirmation', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'Danilo',
        email: 'danilo@gmail.com',
        password: 'facu12345'
        // passwordConfirmation: 'facu12345'
      }
    }

    const httppResponse = sut.handle(httpRequest)
    expect(httppResponse.statusCode).toBe(400)
    expect(httppResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
