import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SetupScalar } from './infrastructure/configurations/scalar.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SetupScalar(app);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
