import { PermissionGroup } from "./PermissionGroup";
import { Permission } from "./Permission";

export class PermissionGroupWithPermissions extends PermissionGroup {
  public permissions: Permission[];
}
