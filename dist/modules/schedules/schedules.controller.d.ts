import { SchedulesService } from './schedules.service';
import { Schedule, ScheduleFields, SlotScheduleFields, UserScheduleFields } from './dto/schedule.dto';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    getSchedule(): Promise<Schedule[]>;
    createSchedule(payload: ScheduleFields): Promise<{
        date: Date;
        slots: any[];
    } & Schedule>;
    test(payload: UserScheduleFields): Promise<import("typeorm").UpdateResult>;
    test2(payload: SlotScheduleFields): Promise<number>;
    test3(payload: SlotScheduleFields): Promise<import("../users/dto/user.dto").User[]>;
}
