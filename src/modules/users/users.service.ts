import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, UserFields } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../common/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /* async find(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  } */

  /* async isValidCredentials(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOneBy({
      email: email,
      password: password,
    });
    if (user) return true;
    return false;
  } */

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
}
