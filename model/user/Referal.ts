import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { BaseUser } from "./BaseUser";

export class Referal extends BaseOrganizationModel {
  public fromUserId: string;
  public fromUser?: BaseUser;
  public toUserId: string;
  public toUser?: BaseUser;
}
