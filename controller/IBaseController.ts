import { JoinCondition } from "base-ale/model/Filter";
import { Paging } from "./Paging";

export interface IBaseController<T> {
  find(): Promise<T[]>;
  list(
    joinConditions?: JoinCondition[],
    page?: number,
    pageSize?: number,
    orderByField?: string[]
  ): Promise<Paging<T[]>>;
  get(id: string): Promise<T>;
  update(t: T): Promise<T>;
  delete(id: string): Promise<T>;
}
