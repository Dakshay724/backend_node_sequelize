export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role:UserRole
  }
  

  // src/enums/roles.ts
export enum UserRole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
  }
  