import { ObjectId } from 'mongoose';
export declare class CreateDeedDto {
    readonly name: string;
    readonly text: string;
    readonly userId: ObjectId;
}
