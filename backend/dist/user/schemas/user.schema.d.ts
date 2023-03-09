import mongoose, { HydratedDocument } from 'mongoose';
import { Deed } from 'src/deed/schemas/deed.schema';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: string;
    email: string;
    deeds: Deed[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User>;
