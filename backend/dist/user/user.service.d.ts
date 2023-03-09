import { Model, ObjectId } from 'mongoose';
import { Deed, DeedDocument } from 'src/deed/schemas/deed.schema';
import { CreateDeedDto } from './dto/create-deed.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private userModel;
    private deedModel;
    constructor(userModel: Model<UserDocument>, deedModel: Model<DeedDocument>);
    create(dto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    getOne(id: ObjectId): Promise<User>;
    deleteOne(id: ObjectId): Promise<void>;
    updateOne(id: ObjectId, dto: CreateUserDto): Promise<User>;
    addDeed(dto: CreateDeedDto): Promise<Deed>;
    deleteDeed(userId: ObjectId, deedId: ObjectId): Promise<void>;
    updateDeed(userId: ObjectId, deedId: ObjectId, dto: CreateDeedDto): Promise<Deed>;
    replaceDeedById(deeds: any, id: any, replacement?: any): any;
}
