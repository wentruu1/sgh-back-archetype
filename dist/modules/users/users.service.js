"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_dto_1 = require("./dto/user.dto");
const typeorm_2 = require("@nestjs/typeorm");
const role_enum_1 = require("../../common/enums/role.enum");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(email) {
        return await this.userRepository.findOneBy({ email });
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async save(payload) {
        const userEmail = payload.email;
        const userPassword = payload.password;
        return await this.userRepository.save({
            email: userEmail,
            password: userPassword,
            rol: role_enum_1.Role.alumno,
            absenceCount: 0,
        });
    }
    async updateRole(email, rol) {
        const user = await this.userRepository.findOne({ where: { email } });
        return await this.userRepository.update(user.id, {
            rol: rol,
        });
    }
    async punishUser(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        return await this.userRepository.update(user.id, {
            absenceCount: user.absenceCount + 1,
        });
    }
    async isValidCredentials(email, password) {
        const user = await this.userRepository.findOneBy({ email });
        if (user.email === email &&
            user.password === password &&
            user.rol === role_enum_1.Role.ayudante) {
            return true;
        }
        return false;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_dto_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map