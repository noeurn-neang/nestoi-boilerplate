import jwt from 'jsonwebtoken';
import { AppConfigs } from '../configs/app';
import { IUser } from '../models';

export const signUserToken = (user: IUser) => {
  const token: any = jwt.sign(
    { _id: user._id?.toString(), name: user.name },
    AppConfigs.JWT_SECRET,
    {
      expiresIn: '15 days',
    },
  );

  return token;
};
