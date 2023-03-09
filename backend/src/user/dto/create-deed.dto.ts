import { ObjectId } from 'mongoose';

export class CreateDeedDto {
  readonly name: string;
  readonly text: string;
  readonly userId: ObjectId;
}
