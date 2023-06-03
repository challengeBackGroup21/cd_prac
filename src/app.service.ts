import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class AppService {
  getHello(): string {
    const jwtConfig = config.get('jwt');
    return 'Hello World!' + jwtConfig.atExpiresIn;
  }
}
