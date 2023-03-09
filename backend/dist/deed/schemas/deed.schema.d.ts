import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
export type DeedDocument = HydratedDocument<Deed>;
export declare class Deed {
    name: string;
    text: string;
    userId: User;
}
export declare const DeedSchema: mongoose.Schema<Deed, mongoose.Model<Deed, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Deed>;
