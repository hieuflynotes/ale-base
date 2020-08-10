import { BaseOrganizationModel } from "../BaseOrganizationModel";
import { BaseUser } from "./BaseUser";

export class Referal extends BaseOrganizationModel {
  public fromUserId: string;
  public toUserId: string;
}

export class ReferalWithUser extends Referal {
  public fromUser: BaseUser;
  public toUser: BaseUser;
}
