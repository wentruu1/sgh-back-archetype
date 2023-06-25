import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, UserFields } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../common/enums/role.enum';
// import { Schedule } from 'src/modules/schedules/dto/schedule.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    // @InjectRepository(Schedule)
    // private scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async save(payload: UserFields) {
    const userEmail = payload.email;
    const userPassword = payload.password;
    return await this.userRepository.save({
      email: userEmail,
      password: userPassword,
      rol: Role.alumno,
      absenceCount: 0,
    });
  }

  async updateRole(email: string, rol: Role) {
    const user = await this.userRepository.findOne({ where: { email } });
    return await this.userRepository.update(user.id, {
      rol: rol,
    });
  }

  async punishUser(email: string) {
    const user: User = await this.userRepository.findOne({ where: { email } });
    return await this.userRepository.update(user.id, {
      absenceCount: user.absenceCount + 1,
    });
  }
  
  // async addUserToSlot(email: string, slotId: number, scheduleId: number) {
  //   const user: User = await this.userRepository.findOne({ where: { email } });
  //   const schedule = await this.scheduleRepository.findOne({
  //     where: { id: scheduleId },
  //   });
  //   if (schedule) {
  //     const slot = schedule.slots.find(slot => slot.slotId === slotId);
  //     if (slot) {
  //       slot.users.push(user);
  //       await this.scheduleRepository.save(schedule);
  //     }
  //   }
  // }
}