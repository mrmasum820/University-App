import { IBaseEntity } from "../base.entity";

export interface ClassroomEntity extends IBaseEntity {
  id: number;
  name: string;
  code?: string;
  description?: string;
  cadits: number;
  status: string;
}
