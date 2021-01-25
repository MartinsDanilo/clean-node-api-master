import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-erro'

export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  handle(httpRequest: HttpRequest): HttpResponse | any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      console.log(httpRequest.body.email)
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
