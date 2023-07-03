import { Role } from '../../../common/enums/role.enum';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({ length: 255 })
  email: string;

  @Column({
    name: 'password',
    length: 255,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.alumno,
  })
  rol: Role;

  @Column({
    length: 255,
    default: 0,
  })
  absenceCount: number;
}

export class UserFields {
  email: string;
  password: string;
}
