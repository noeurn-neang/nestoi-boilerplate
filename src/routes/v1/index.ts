import { IRouteTag } from 'nestoi';
import { getUsers as getUsersController } from '../../controllers';
import {
  getUsers as getUsersSchema,
  createUser as createUserSchema,
  updateUser as updateUserSchema,
} from '../../schemas/user.schema';
import { authenticate } from '../../middlewares';

export const routeTags: IRouteTag[] = [
  {
    name: 'User',
    description: 'List, create, update and delete user.',
    middlewares: [authenticate],
    routes: {
      '/users': {
        get: {
          summary: 'Get users list',
          handler: getUsersController,
          schema: {
            query: getUsersSchema,
          },
        },
        post: {
          summary: 'Create new user',
          handler: getUsersController,
          schema: {
            body: createUserSchema,
          },
        },
      },
      '/users/{id}': {
        put: {
          summary: 'Update a user by id',
          handler: getUsersController,
          schema: {
            params: ['*id'],
            body: updateUserSchema,
          },
        },
        delete: {
          summary: 'Delete a user by id',
          handler: getUsersController,
          schema: {
            params: ['*id'],
          },
        },
      },
    },
  },
];
