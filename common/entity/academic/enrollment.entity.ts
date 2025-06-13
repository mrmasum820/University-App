import { IBaseEntity } from "../base.entity";

export interface EnrollmentEntity extends IBaseEntity {
  name: string;
  code?: string;
  description?: string;
  cadits: number;
  status: string;
}
