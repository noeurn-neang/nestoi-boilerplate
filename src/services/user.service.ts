import { UserModel, dummyUsers } from '../models';
export interface IGetUserParams {
  name?: string;
  __userIds?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const findUserById = (_id: string): UserModel | null => dummyUsers[0];

export const getUsers = (): UserModel[] => dummyUsers;
