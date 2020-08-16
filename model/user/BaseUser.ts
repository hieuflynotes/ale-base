import { BaseModel } from "../BaseModel";
import { Account } from "../account/Account";

export class BaseUser extends Account {}

export class BaseUserWithJwt extends BaseUser {
  jwt?: string;
}
