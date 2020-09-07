import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { Permission } from "./Permission";

export class Role extends BaseOrganizationModel {
  public name: string;
  public permissionIds: string[];
  public permissions?: Permission[];
}
