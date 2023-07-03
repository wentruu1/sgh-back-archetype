import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  Schedule,
  ScheduleFields,
  UserScheduleFields,
  SlotScheduleFields,
} from './dto/schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot } from './dto/slot.dto';
import { Role } from 'src/common/enums/role.enum';
import { UsersService } from '../users/users.service';
import { User } from '../users/dto/user.dto';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
  async addUserToSlot(payload: UserScheduleFields) {
    const date = new Date(payload.date);
    const email = payload.email;
    const schedule = await this.scheduleRepository.findOneBy({ date });
    const user = await this.userRepository.findOneBy({ email });
    console.log(schedule);
    schedule.slots.at(payload.slotId - 1).users.push(user);
    return await this.scheduleRepository.update(schedule.id, {
      date: schedule.date,
      slots: schedule.slots,
    });
  }

  async getSlotUsers(payload: SlotScheduleFields) {
    console.log(payload.date);
    const date = new Date(payload.date + 'T00:00:00.000+00:00');
    console.log(date);
    console.log(payload.slotId);
    const slot = (await this.scheduleRepository.findOneBy({ date })).slots[
      payload.slotId - 1
    ];
    return slot.users;
  }
}
