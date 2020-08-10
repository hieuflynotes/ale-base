import { BaseModel } from "../BaseModel";

export class BaseUser extends BaseModel {
  loginType?: LoginType;
  avatar?: string;
  fullName?: string;
  firstName?: string;
  lastname?: string;
  phonenumber?: string;
  email?: string;
  lastLogin?: Date;
  username?: string;
  password?: string;
}

export class BaseUserWithJwt extends BaseUser {
  jwt?: string;
}

export enum LoginType {
  phonenumber = "phonenumber",
  facebook = "facebook",
  google = "google",
}
