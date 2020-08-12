import { BaseUser, BaseUserWithJwt } from "@Core/model/user/BaseUser";
import { BaseController } from "../BaseController";
import { IBaseUserController } from "./IBaseUserController";

export class BaseUserController extends BaseController<BaseUser>
  implements IBaseUserController {
  getMe(): Promise<BaseUser> {
    throw new Error("Method not implemented.");
  }

  loginFacebook(
    facebookId: string,
    fullName: string,
    avatar: string
  ): Promise<BaseUserWithJwt> {
    throw new Error("Method not implemented.");
  }

  loginGoogle(
    facebookId: string,
    fullName: string,
    avatar: string
  ): Promise<BaseUserWithJwt> {
    throw new Error("Method not implemented.");
  }
}
