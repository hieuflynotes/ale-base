import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { BaseUser } from "../user/BaseUser";
import { Role } from "./Role";

export class Account extends BaseOrganizationModel {
  public username?: string;
  public password?: string;
  public avatar?: string;
  public fullName?: string;
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public mobile?: string;
  public roleIds?: string[];
  public roles?: Role[];
  public lastLogin?: Date;
  public referalFromUserId?: string;
  public referalFromUser?: BaseUser;
  public loginType?: LoginType;
  public gender?: Gender;
  jwt?: string;
}

export enum LoginType {
  email = "email",
  mobile = "mobile",
  facebook = "facebook",
  google = "google",
}

export enum Gender {
  male = "male",
  female = "female",
}
