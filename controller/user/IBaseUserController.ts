import { IBaseController } from "../IBaseController";
import { BaseUser, BaseUserWithJwt } from "@Core/model/user/BaseUser";

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
