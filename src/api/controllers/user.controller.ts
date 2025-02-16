import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../application/services/user-service/user.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseAPI } from '../../shared/models/common/api-response.model';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello' })
  @ApiResponse({ status: 200, description: 'Just Test' })
  getHello(): ResponseAPI<string> {
    return this.appService.getHello();
  }

  @Get('test')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns a list of users' })
  getAllUsers() {
    return [{ id: 1, name: 'John Doe' }];
  }

  @Get('error')
  @ApiOperation({ summary: 'Get error' })
  @ApiResponse({ status: 500, description: 'Returns an error' })
  getError() {
    throw new Error('This is an error');
  }
}
