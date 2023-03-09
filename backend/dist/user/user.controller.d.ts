import { ObjectId } from 'mongoose';
import { CreateDeedDto } from './dto/create-deed.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    userService: UserService;
    constructor(userService: UserService);
    getAll(): Promise<import("./schemas/user.schema").User[]>;
    create(dto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    getOne(id: ObjectId): Promise<import("./schemas/user.schema").User>;
    deleteOne(id: ObjectId): Promise<void>;
    updateOne(id: ObjectId, dto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    addDeed(dto: CreateDeedDto): Promise<import("../deed/schemas/deed.schema").Deed>;
    deleteDeed(userId: ObjectId, deedId: ObjectId): Promise<void>;
    updateDeed(userId: ObjectId, deedId: ObjectId, dto: CreateDeedDto): Promise<import("../deed/schemas/deed.schema").Deed>;
}
