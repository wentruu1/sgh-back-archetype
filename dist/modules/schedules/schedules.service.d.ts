import { Repository } from 'typeorm';
import { Schedule, ScheduleFields, UserScheduleFields, SlotScheduleFields } from './dto/schedule.dto';
import { User } from '../users/dto/user.dto';
export declare class SchedulesService {
    private scheduleRepository;
    private userRepository;
    constructor(scheduleRepository: Repository<Schedule>, userRepository: Repository<User>);
    findAll(): Promise<Schedule[]>;
    save(payload: ScheduleFields): Promise<{
        date: Date;
        slots: any[];
    } & Schedule>;
    addUserToSlot(payload: UserScheduleFields): Promise<import("typeorm").UpdateResult>;
    getSlotUsers(payload: SlotScheduleFields): Promise<User[]>;
}
