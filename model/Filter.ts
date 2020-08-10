export class Filter {
  field: string;
  value: string;
  operator?: FilterOperator = FilterOperator.eq;
  joinCondition?: JoinCondition = JoinCondition.and;
}

export enum FilterOperator {
  eq = "eq",
  gt = "gt",
  gte = "gte",
  lt = "lt",
  lte = "lte",
  like = "like",
}

export enum JoinCondition {
  and = "and",
  or = "or",
}
