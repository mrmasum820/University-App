import { IBaseEntity } from "../base.entity";

export interface GradesEntity extends IBaseEntity {
  name: string;
  max_mark?: { number: number };
  grade: { name: string };
  created_at: string;
  updated_at: string;
  status?: string;
}
