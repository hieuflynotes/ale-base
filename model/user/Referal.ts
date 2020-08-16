import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { BaseUser } from "./BaseUser";

export class Referal extends BaseOrganizationModel {
  public fromUser: string | BaseUser;
  public toUser: string | BaseUser;
}
