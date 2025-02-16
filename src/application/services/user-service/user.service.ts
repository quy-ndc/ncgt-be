import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseAPI } from '../../../shared/models/common/api-response.model';

@Injectable()
export class UserService {
  getHello(): ResponseAPI<string> {
    return new ResponseAPI(HttpStatus.OK, 'Hello World', 'okoko');
  }
}
