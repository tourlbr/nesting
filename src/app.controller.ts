import { Controller, Get } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiQuery({
    name: 'contentType',
    type: 'enum',
    required: false,
    enum: ['Serial'],
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
