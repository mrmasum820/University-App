import { IBaseEntity } from "../base.entity";

export interface AgentsCategoryEntity extends IBaseEntity {
  name: string;
  status: string;
}
