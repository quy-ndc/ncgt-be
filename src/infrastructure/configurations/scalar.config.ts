import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { apiReference } from '@scalar/nestjs-api-reference';

export function SetupScalar(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for My Application')
    .setVersion('1.0')
    .addBearerAuth() // Enable JWT authentication
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/api-docs',
    apiReference({
      theme: 'kepler',
      spec: {
        content: document,
      },
    }),
  );
  //SwaggerModule.setup('api-docs', app, document);

  console.info('Scalar setup complete');
}
