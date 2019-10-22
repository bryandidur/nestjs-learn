import { Module } from '@nestjs/common';
import { AppController, UserController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
  ],
  providers: [
    AppService,
  ],
})

export class AppModule {}
