import { IBaseEntity } from "../base.entity";

export interface DepartmentEntity extends IBaseEntity {
  name: string;
  code: string;
}
