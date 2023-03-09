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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const create_deed_dto_1 = require("./dto/create-deed.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        const users = this.userService.getAll();
        return users;
    }
    create(dto) {
        const user = this.userService.create(dto);
        return user;
    }
    getOne(id) {
        const user = this.userService.getOne(id);
        return user;
    }
    deleteOne(id) {
        const user = this.userService.deleteOne(id);
        return user;
    }
    updateOne(id, dto) {
        const user = this.userService.updateOne(id, dto);
        return user;
    }
    addDeed(dto) {
        return this.userService.addDeed(dto);
    }
    deleteDeed(userId, deedId) {
        return this.userService.deleteDeed(userId, deedId);
    }
    updateDeed(userId, deedId, dto) {
        return this.userService.updateDeed(userId, deedId, dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteOne", null);
__decorate([
    (0, decorators_1.Patch)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Post)('/deed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deed_dto_1.CreateDeedDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addDeed", null);
__decorate([
    (0, decorators_1.Delete)('/:userId/deed/:deedId'),
    __param(0, (0, decorators_1.Param)('userId')),
    __param(1, (0, decorators_1.Param)('deedId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteDeed", null);
__decorate([
    (0, decorators_1.Patch)('/:userId/deed/:deedId'),
    __param(0, (0, decorators_1.Param)('userId')),
    __param(1, (0, decorators_1.Param)('deedId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_deed_dto_1.CreateDeedDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateDeed", null);
UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map