import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UserController {
  protected users: object[] = [
    { name: 'Bryan', age: 23 },
    { name: 'Maria', age: 38 },
    { name: 'Joana', age: 19 },
  ];

  @Get()
  getUsers(): string {
    return JSON.stringify(this.users);
  }

  @Get('1')
  getFirst(): string {
    return JSON.stringify(this.users[0] || {});
  }
}
