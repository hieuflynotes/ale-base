import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { Permission } from "./Permission";

export class PermissionGroup extends BaseOrganizationModel {
  public key: string;
  public name: string;
}

export class PermissionGroupWithPermissions extends PermissionGroup {
  public permissions: Permission[];
}
