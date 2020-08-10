import { BaseUser, BaseUserWithJwt } from "base-ale/model/user/BaseUser";
import { IBaseController } from "../IBaseController";

export interface IBaseUserController extends IBaseController<BaseUser> {
  getMe(): Promise<BaseUser>;

  loginFacebook(
    facebookId: string,
    fullName: string,
    avatar: string
  ): Promise<BaseUserWithJwt>;

  loginGoogle(
    facebookId: string,
    fullName: string,
    avatar: string
  ): Promise<BaseUserWithJwt>;
}
