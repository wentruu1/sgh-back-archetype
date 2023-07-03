import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import {
  Schedule,
  ScheduleFields,
  SlotScheduleFields,
  UserScheduleFields,
} from './dto/schedule.dto';

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

  @Post('addToSlot')
  async test(@Body() payload: UserScheduleFields) {
    return await this.schedulesService.addUserToSlot(payload);
  }

  @Post('slotsFilled')
  async test2(@Body() payload: SlotScheduleFields) {
    return (await this.schedulesService.getSlotUsers(payload)).length;
  }

  @Post('slotUsers')
  async test3(@Body() payload: SlotScheduleFields) {
    console.log('a');
    return await this.schedulesService.getSlotUsers(payload);
  }
}
