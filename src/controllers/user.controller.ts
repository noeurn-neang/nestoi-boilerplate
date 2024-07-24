import { Request, Response } from 'nestoi';
import { getUsers as getUsersService } from '../services/user.service';
import { errorRes, successRes } from '../utils/response';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { params, query, body } = req;
    const users = getUsersService();

    successRes(res, {
      data: {
        params,
        query,
        body,
      },
    });
  } catch (e: any) {
    errorRes(res, { msg: e.message });
  }
};
