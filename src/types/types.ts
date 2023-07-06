import { SwaggerClient } from '@/init/swagger';

export type SwaggerClientType = InstanceType<typeof SwaggerClient>;

export type UserType = 'user' | 'admin';

export interface JwtToken {
  access: string;
  refresh: string;
}

export enum Gender {
  male = 0,
  female = 1,
  other = 2,
}

export enum Job {
  EMPLOEE = 1,
  EXECUTIVE = 2,
  CIVILSERVANT = 3,
  SELFEMPLYED = 4,
  HOUSEWIFE = 5,
  PARTTIMEJOB = 6,
  STUDENT = 7,
  OTHERS = 8,
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
}
