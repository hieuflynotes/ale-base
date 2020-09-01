import { Account } from "../../model/account/Account";
import { IBaseController } from "../IBaseController";

export interface IBaseAccountController extends IBaseController<Account> {
  login(username: string, password: string): Promise<Account>;
}
