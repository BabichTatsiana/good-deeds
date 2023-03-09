import { Model } from 'mongoose';
import { Deed, DeedDocument } from 'src/deed/schemas/deed.schema';
export declare class DeedService {
    private deedModel;
    constructor(deedModel: Model<DeedDocument>);
    getAll(): Promise<Deed[]>;
}
