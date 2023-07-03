"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesModule = void 0;
const common_1 = require("@nestjs/common");
const schedules_controller_1 = require("./schedules.controller");
const schedules_service_1 = require("./schedules.service");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_dto_1 = require("./dto/schedule.dto");
const user_dto_1 = require("../users/dto/user.dto");
let SchedulesModule = class SchedulesModule {
};
SchedulesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([schedule_dto_1.Schedule]),
            typeorm_1.TypeOrmModule.forFeature([user_dto_1.User]),
        ],
        controllers: [schedules_controller_1.SchedulesController],
        providers: [schedules_service_1.SchedulesService],
    })
], SchedulesModule);
exports.SchedulesModule = SchedulesModule;
//# sourceMappingURL=schedules.module.js.map