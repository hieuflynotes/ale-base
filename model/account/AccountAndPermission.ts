import { Account } from "./Account";
import { Role } from "./Role";
import { Permission } from "./Permission";

export class AccountAndPermission extends Account {
  public roles?: Role[];
  public permissions?: Permission[];
}
