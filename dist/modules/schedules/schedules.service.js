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
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const schedule_dto_1 = require("./dto/schedule.dto");
const typeorm_2 = require("@nestjs/typeorm");
const slot_dto_1 = require("./dto/slot.dto");
const user_dto_1 = require("../users/dto/user.dto");
let SchedulesService = class SchedulesService {
    constructor(scheduleRepository, userRepository) {
        this.scheduleRepository = scheduleRepository;
        this.userRepository = userRepository;
    }
    async findAll() {
        return await this.scheduleRepository.find();
    }
    async save(payload) {
        const scheduleDate = new Date(payload.date);
        const slots = [];
        for (let i = 1; i <= 8; i++) {
            const slot = new slot_dto_1.Slot();
            slot.slotId = i;
            slots.push(slot);
        }
        return await this.scheduleRepository.save({
            date: scheduleDate,
            slots,
        });
    }
    async addUserToSlot(payload) {
        const date = new Date(payload.date);
        const email = payload.email;
        const schedule = await this.scheduleRepository.findOneBy({ date });
        const user = await this.userRepository.findOneBy({ email });
        console.log(schedule);
        schedule.slots.at(payload.slotId - 1).users.push(user);
        return await this.scheduleRepository.update(schedule.id, {
            date: schedule.date,
            slots: schedule.slots,
        });
    }
    async getSlotUsers(payload) {
        console.log(payload.date);
        const date = new Date(payload.date + 'T00:00:00.000+00:00');
        console.log(date);
        console.log(payload.slotId);
        const slot = (await this.scheduleRepository.findOneBy({ date })).slots[payload.slotId - 1];
        return slot.users;
    }
};
SchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(schedule_dto_1.Schedule)),
    __param(1, (0, typeorm_2.InjectRepository)(user_dto_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SchedulesService);
exports.SchedulesService = SchedulesService;
//# sourceMappingURL=schedules.service.js.map