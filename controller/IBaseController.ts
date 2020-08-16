import { Filter } from "../model/Filter";
import { Paging } from "./Paging";

export interface IBaseController<T> {
  find(): Promise<T[]>;
  list(
    filters?: Filter[],
    page?: number,
    pageSize?: number,
    orderByField?: string[]
  ): Promise<Paging<T>>;
  get(id: string | string[]): Promise<T>;
  create(t: T): Promise<T>;
  update(id: string, t: T): Promise<T>;
  delete(id: string): Promise<T>;
}
