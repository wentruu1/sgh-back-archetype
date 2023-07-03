import { Role } from '../../../common/enums/role.enum';
export declare class User {
    id: number;
    email: string;
    password: string;
    rol: Role;
    absenceCount: number;
}
export declare class UserFields {
    email: string;
    password: string;
}
