import { Slot } from './slot.dto';
export declare class Schedule {
    id: number;
    date: Date;
    slots: Slot[];
}
export declare class ScheduleFields {
    date: string;
}
export declare class UserScheduleFields {
    date: string;
    email: string;
    slotId: number;
}
export declare class SlotScheduleFields {
    date: string;
    slotId: number;
}
