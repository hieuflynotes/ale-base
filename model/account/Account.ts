import { BaseOrganizationModel } from "../BaseOrganizationModel";

export class Account extends BaseOrganizationModel {
  public username: string;
  public hashPassword: string;
  public firstName?: string;
  public lastName?: string;
  public email?: string;
  public phone?: string;
  public roleIds?: string[];
}
