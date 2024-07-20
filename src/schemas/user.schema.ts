export const getUsers: string[] = ['q', '*page', '*pageSize'];

export const createUser: string[] = [
  '*name',
  '*email',
  '*password',
  'gender',
  '*dob',
  'isActive',
];

export const updateUser: string[] = [
  '*name',
  '*email',
  '*password',
  'gender',
  '*dob',
  'isActive',
  'items',
];
