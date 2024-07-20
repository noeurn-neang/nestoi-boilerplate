import { UserModel } from './models/user.model';
import { Request } from 'nestplus';

export interface IRequest extends Request {
  user?: UserModel;
}
