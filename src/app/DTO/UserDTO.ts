export class UserDTO{
  userId: string
  firstName: string
  name: string
  email: string
  birthday: string
  userName: string
  role: Role;
}

export enum Role{
  user,
  admin
}
