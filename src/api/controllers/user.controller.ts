import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../application/services/user-service/user.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns a list of users' })
  getAllUsers() {
    return [{ id: 1, name: 'John Doe' }];
  }
}
