import { INestApplication } from '@nestjs/common';
import { SetupScalar } from './scalar.config';

export function ConfigModule(app: INestApplication) {
  SetupScalar(app);

  console.log('ConfigModule setup complete');
}
