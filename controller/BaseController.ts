import { JoinCondition } from "base-ale/model/Filter";
import { IBaseController } from "./IBaseController";
import { Paging } from "./Paging";
export class BaseController<T> implements IBaseController<T> {
  protected basePath: string;
  protected serviceURL: string;

  public constructor(serviceURL: string, basePath: string) {
    this.basePath = basePath;
  }

  public find(): Promise<T[]> {
    const url = `${this.serviceURL}/${this.basePath}/find`;
    throw new Error("Method not implemented.");
  }
  public list(
    joinConditions?: JoinCondition[],
    page?: number,
    pageSize?: number,
    orderByField?: string[]
  ): Promise<Paging<T[]>> {
    const url = `${this.serviceURL}/${this.basePath}`;
    throw new Error("Method not implemented.");
  }
  public get(id: string): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}/${id}`;
    throw new Error("Method not implemented.");
  }
  public update(t: T): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}`;
    throw new Error("Method not implemented.");
  }
  public delete(id: string): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}/${id}`;
    throw new Error("Method not implemented.");
  }
}
