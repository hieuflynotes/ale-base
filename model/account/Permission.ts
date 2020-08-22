import { BaseModel } from "../BaseModel";

export class Permission extends BaseModel {
  public key: string;
  public name: string;
  public permissionGroupId: string;
}
