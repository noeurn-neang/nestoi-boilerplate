import { UserModel } from './models/user.model';
import { Request } from 'nestoi';

export interface IRequest extends Request {
  user?: UserModel;
  [key: string]: any;
}
