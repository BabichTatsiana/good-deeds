import { DeedService } from './deed.service';
export declare class DeedController {
    deedService: DeedService;
    constructor(deedService: DeedService);
    getAll(): Promise<import("./schemas/deed.schema").Deed[]>;
}
