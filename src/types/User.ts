export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  lastLogin?: string;
}

export interface UserCreate {
  email: string;
  name: string;
  password: string;
  role: 'admin' | 'user';
}