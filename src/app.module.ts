import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/dto/user.dto';
import { Schedule } from './modules/schedules/dto/schedule.dto';
import { Slot } from './modules/schedules/dto/slot.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      autoLoadEntities: true,
      entities: [User,Schedule,Slot],
      synchronize: true,
    }),
    UsersModule,SchedulesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
