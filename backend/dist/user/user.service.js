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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const deed_schema_1 = require("../deed/schemas/deed.schema");
const user_schema_1 = require("./schemas/user.schema");
let UserService = class UserService {
    constructor(userModel, deedModel) {
        this.userModel = userModel;
        this.deedModel = deedModel;
    }
    async create(dto) {
        console.log(dto);
        return await this.userModel.create(Object.assign({}, dto));
    }
    async getAll() {
        const users = await this.userModel.find();
        return users;
    }
    async getOne(id) {
        const user = await this.userModel.findById(id).populate('deeds');
        return user;
    }
    async deleteOne(id) {
        await this.userModel.findByIdAndDelete(id);
    }
    async updateOne(id, dto) {
        const user = await this.userModel.findByIdAndUpdate(id, dto, { new: true });
        return user;
    }
    async addDeed(dto) {
        const user = await this.userModel.findById(dto.userId);
        const deed = await this.deedModel.create(Object.assign({}, dto));
        user.deeds.push(deed.id);
        await user.save();
        return deed;
    }
    async deleteDeed(userId, deedId) {
        const user = await this.userModel.findById(userId);
        const deed = await this.deedModel.findByIdAndDelete(deedId);
        console.log(userId, deedId, user);
        this.replaceDeedById(user.deeds, deed.id);
        await user.save();
    }
    async updateDeed(userId, deedId, dto) {
        const user = await this.userModel.findById(userId);
        const deed = await this.deedModel.findByIdAndUpdate(deedId, dto, {
            new: true,
        });
        this.replaceDeedById(user.deeds, deed.id, deed);
        await user.save();
        return deed;
    }
    replaceDeedById(deeds, id, replacement = null) {
        const index = deeds.findIndex((deed) => deed.id === id);
        if (index !== -1) {
            deeds.splice(index, 1, replacement);
        }
        return deeds;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(deed_schema_1.Deed.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map