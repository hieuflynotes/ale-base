import { BaseOrganizationModel } from "../BaseOrganizationModel";

export class Role extends BaseOrganizationModel {
  public name: string;
  public perrmisionIds: string[];
}
