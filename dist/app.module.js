"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const schedules_module_1 = require("./modules/schedules/schedules.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_dto_1 = require("./modules/users/dto/user.dto");
const schedule_dto_1 = require("./modules/schedules/dto/schedule.dto");
const slot_dto_1 = require("./modules/schedules/dto/slot.dto");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                host: 'localhost',
                port: 27017,
                database: 'test',
                autoLoadEntities: true,
                entities: [user_dto_1.User, schedule_dto_1.Schedule, slot_dto_1.Slot],
                synchronize: true,
            }),
            users_module_1.UsersModule, schedules_module_1.SchedulesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map