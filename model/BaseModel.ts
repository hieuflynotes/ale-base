export class BaseModel {
  public _id?: string;
  public id?: string;
  public createdAt?: Date = new Date();
  public updatedAt?: Date = new Date();
  public status?: Status;
  public createdBy?: string;
  public updatedBy?: string;
}

export enum Status {
  actived = "actived",
  deleted = "deleted",
}
