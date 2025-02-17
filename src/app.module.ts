import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UserService } from './application/services/user-service/user.service';
import { FilterModule } from './api/filters/filter.module';
import { LoggerModule } from 'nestjs-pino';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    FilterModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      },
    }),
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 1000,
        limit: 10,
      },
      {
        name: 'retrieve-data',
        ttl: 1000,
        limit: 20,
      },
      {
        name: 'authentication',
        ttl: 1000,
        limit: 3,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
