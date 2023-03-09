"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeedModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const deed_schema_1 = require("./schemas/deed.schema");
const deed_controller_1 = require("./deed.controller");
const deed_service_1 = require("./deed.service");
let DeedModule = class DeedModule {
};
DeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: deed_schema_1.Deed.name, schema: deed_schema_1.DeedSchema }]),
        ],
        controllers: [deed_controller_1.DeedController],
        providers: [deed_service_1.DeedService],
    })
], DeedModule);
exports.DeedModule = DeedModule;
//# sourceMappingURL=deed.module.js.map