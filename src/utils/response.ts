import { Response } from 'express';

export interface IResponse {
  msg?: string;
  data?: object;
}

export const errorRes = (res: Response, payload: IResponse) => {
  res.status(400).json({
    success: 0,
    ...payload,
  });
};

export const successRes = (res: Response, payload: IResponse) => {
  res.status(200).json({
    success: 1,
    ...payload,
  });
};
