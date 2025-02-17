import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UserService } from './application/services/user-service/user.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
