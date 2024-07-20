import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { errorRes } from './response';

export const validateBody = (schema: Joi.ObjectSchema<any>) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const { error } = schema.validate(req.body);
    if (error) {
      return errorRes(res, { msg: error.message });
    }

    next();
  };
};

export const validateParams = (schema: Joi.ObjectSchema<any>) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const { error } = schema.validate(req.params);
    if (error) {
      return errorRes(res, { msg: error.message });
    }

    next();
  };
};
