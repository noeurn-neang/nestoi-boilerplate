export interface UserModel {
  id: number;
  name: string;
  email?: string;
}

// Note: Please remove this. It's just for testing
export const dummyUsers: UserModel[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'neang@gmail.com',
  },
  {
    id: 2,
    name: 'Mr. Albert',
    email: 'neang@gmail.com',
  },
];
