import { mongo } from 'mongoose';

export const toObjectId = (hexString: string) => new mongo.ObjectId(hexString);
