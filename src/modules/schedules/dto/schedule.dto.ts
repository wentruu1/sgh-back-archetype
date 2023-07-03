import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Slot } from './slot.dto';

@Entity({
  name: 'schedules',
})
export class Schedule {
  @ObjectIdColumn()
  id: number;

  @Column()
  date: Date;

  @Column(() => Slot)
  slots: Slot[];
}
export class ScheduleFields {
  date: string;
}

export class UserScheduleFields {
  date: string;
  email: string;
  slotId: number;
}

export class SlotScheduleFields {
  date: string;
  slotId: number;
}
