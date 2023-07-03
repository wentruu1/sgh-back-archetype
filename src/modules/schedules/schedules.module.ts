import { Module } from '@nestjs/common';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './dto/schedule.dto';
import { UsersModule } from '../users/users.module';
import { User } from '../users/dto/user.dto';
@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService],
})
export class SchedulesModule {}
