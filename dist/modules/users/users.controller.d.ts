import { User, UserFields } from './dto/user.dto';
import { UsersService } from './users.service';
import { UpdatePayload } from './payloads/update.payload';
import { PunishPayload } from './payloads/punish.payload';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    validCredentials(payload: UserFields): Promise<boolean>;
    getUsers(): Promise<User[]>;
    createUser(payload: UserFields): Promise<{
        email: string;
        password: string;
        rol: import("../../common/enums/role.enum").Role.alumno;
        absenceCount: number;
    } & User>;
    updateUserRole(payload: UpdatePayload): Promise<import("typeorm").UpdateResult>;
    punishUser(payload: PunishPayload): Promise<import("typeorm").UpdateResult>;
}
