import { Repository } from 'typeorm';
import { User, UserFields } from './dto/user.dto';
import { Role } from '../../common/enums/role.enum';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    find(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    save(payload: UserFields): Promise<{
        email: string;
        password: string;
        rol: Role.alumno;
        absenceCount: number;
    } & User>;
    updateRole(email: string, rol: Role): Promise<import("typeorm").UpdateResult>;
    punishUser(email: string): Promise<import("typeorm").UpdateResult>;
    isValidCredentials(email: string, password: string): Promise<boolean>;
}
