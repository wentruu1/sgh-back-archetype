import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Schedule, ScheduleFields } from './dto/schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot } from './dto/slot.dto';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async save(payload: ScheduleFields) {
    const scheduleDate = new Date(payload.date);
    const slots = [];
    for (let i = 1; i <= 8; i++) {
      const slot = new Slot();
      slot.slotId = i;
      slots.push(slot);
    }
    return await this.scheduleRepository.save({
      date: scheduleDate,
      slots,
    });
  }
}