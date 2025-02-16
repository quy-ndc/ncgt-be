import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UserService } from './application/services/user-service/user.service';
import { FilterModule } from './api/filters/filter.module';
import { LoggerModule } from 'nestjs-pino';

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
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
