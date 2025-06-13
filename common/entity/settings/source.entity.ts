import { IBaseEntity } from "../base.entity";

export interface SourceEntity extends IBaseEntity {
  name: string;
  status: string;
}
