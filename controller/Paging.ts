export interface Paging<T> {
  rows: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
