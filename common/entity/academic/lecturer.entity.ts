import { IBaseEntity } from "../base.entity";

export interface LecturerEntity extends IBaseEntity {
  name: string;
  code?: string;
  description?: string;
  cadits: number;
  status: string;
}
