import { Controller, Get } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiQuery({
    name: 'pagingStrategy',
    type: 'enum',
    required: false,
    enum: ['withCount', 'noCount'],
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
