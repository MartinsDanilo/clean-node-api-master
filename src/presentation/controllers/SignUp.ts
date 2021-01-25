import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-erro'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  handle(httpRequest: HttpRequest): HttpResponse | any {
    const requireFields = ['name', 'email']
    for (const field of requireFields) {
      if (!httpRequest.body.email) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
