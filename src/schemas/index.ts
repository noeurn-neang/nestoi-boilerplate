import { Joi } from 'nestplus';

/**
 * Note:
 * Don't do like below, all export from user.schema will showing swagger too
 * Here: export * from './user.schema';
 */

export const q = Joi.string().description('Search string');

export const page = Joi.number()
  .min(1)
  .description('Page number for pagination.')
  .example(1);

export const pageSize = Joi.number()
  .min(1)
  .description('Page size for pagination.')
  .example(10);

export const id = Joi.number().min(1).description('Id of record.').example(1);

export const name = Joi.string()
  .min(2)
  .max(20)
  .description('Name')
  .example('John Duo');

export const email = Joi.string()
  .email()
  .min(2)
  .max(20)
  .description('Email')
  .example('example@gmail.com');

export const password = Joi.string()
  .min(6)
  .max(10)
  .description('Password')
  .example('123456');

export const gender = Joi.string()
  .valid('male', 'female')
  .description('Gender')
  .example('male');

export const items = Joi.array()
  .items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      qty: Joi.number().required(),
    }),
  )
  .description('Items list')
  .example([{ id: 1, name: 'Product A', qty: 10 }]);

export const dob = Joi.string()
  .isoDate()
  .description('Date of birth')
  .example('2000-01-25');

export const isActive = Joi.boolean().description('Is Active').example(true);
