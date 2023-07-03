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
exports.SchedulesController = void 0;
const common_1 = require("@nestjs/common");
const schedules_service_1 = require("./schedules.service");
const schedule_dto_1 = require("./dto/schedule.dto");
let SchedulesController = class SchedulesController {
    constructor(schedulesService) {
        this.schedulesService = schedulesService;
    }
    async getSchedule() {
        return this.schedulesService.findAll();
    }
    async createSchedule(payload) {
        return await this.schedulesService.save(payload);
    }
    async test(payload) {
        return await this.schedulesService.addUserToSlot(payload);
    }
    async test2(payload) {
        return (await this.schedulesService.getSlotUsers(payload)).length;
    }
    async test3(payload) {
        console.log('a');
        return await this.schedulesService.getSlotUsers(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "getSchedule", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.ScheduleFields]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Post)('addToSlot'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.UserScheduleFields]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "test", null);
__decorate([
    (0, common_1.Post)('slotsFilled'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.SlotScheduleFields]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "test2", null);
__decorate([
    (0, common_1.Post)('slotUsers'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_dto_1.SlotScheduleFields]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "test3", null);
SchedulesController = __decorate([
    (0, common_1.Controller)('schedules'),
    __metadata("design:paramtypes", [schedules_service_1.SchedulesService])
], SchedulesController);
exports.SchedulesController = SchedulesController;
//# sourceMappingURL=schedules.controller.js.map