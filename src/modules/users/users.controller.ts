import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { User, UserFields } from './dto/user.dto';
import { UsersService } from './users.service';
import { UpdatePayload } from './payloads/update.payload';
import { PunishPayload } from './payloads/punish.payload';
// import { AddToSlotPayload } from './payloads/addToSlot.payload';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async validCredentials(@Body() payload: UserFields) {
    return this.usersService.isValidCredentials(
      payload.email,
      payload.password,
    );
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() payload: UserFields) {
    return await this.usersService.save(payload);
  }

  @Put()
  async updateUserRole(@Body() payload: UpdatePayload) {
    return await this.usersService.updateRole(payload.email, payload.rol);
  }

  @Put('punish')
  async punishUser(@Body() payload: PunishPayload) {
    return await this.usersService.punishUser(payload.email);
  }

  // @Put('addToSlot')
  // async addUserToSlot(@Body() payload: AddToSlotPayload) {
  //   return await this.usersService.addUserToSlot(payload.email, payload.slotId, payload.scheduleId);
  // }
}
