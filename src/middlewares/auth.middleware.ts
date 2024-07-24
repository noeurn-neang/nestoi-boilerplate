import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppConfigs } from '../configs/app';
import { findUserById } from '../services';
import { IRequest } from '../types';
import { NextFunction, Response } from 'nestoi';

export const authenticate = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({
        success: false,
        msg: 'Unauthenticate.',
      });
      return;
    }

    const decoded: JwtPayload | string = jwt.verify(
      token,
      AppConfigs.JWT_SECRET,
    );
    const loggedInUser = await findUserById((decoded as JwtPayload)._id);
    if (loggedInUser) req.user = loggedInUser;

    next();
  } catch (err: any) {
    res.status(401).json({
      success: false,
      msg: 'Unauthenticate.',
    });
  }
};
