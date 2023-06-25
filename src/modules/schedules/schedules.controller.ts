import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule, ScheduleFields } from './dto/schedule.dto';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get()
  async getSchedule(): Promise<Schedule[]> {
    return this.schedulesService.findAll();
  }

  @Post()
  async createSchedule(@Body() payload: ScheduleFields) {
    return await this.schedulesService.save(payload);
  }
}
