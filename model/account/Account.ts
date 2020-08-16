import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { BaseUser } from "../user/BaseUser";

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
  public lastLogin?: Date;
  public referalFromUser?: string | BaseUser;
  public loginType?: LoginType;
  public gender?: Gender;
}

export enum LoginType {
  email = "email",
  mobile = "mobile",
  facebook = "facebook",
  google = "google",
}

export enum Gender {
  male = "male",
  famale = "famale",
}
