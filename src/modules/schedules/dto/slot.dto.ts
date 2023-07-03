import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { User } from 'src/modules/users/dto/user.dto';

export class Slot {
  @Column()
  slotId: number;

  @Column(() => User)
  users: User[];

  constructor() {
    this.users = [];
  }
}
