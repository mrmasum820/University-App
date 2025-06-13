import { IBaseEntity } from "../base.entity";

export interface ExamTypesEntity extends IBaseEntity {
  name: { name: string };
  created_at: string;
  updated_at: string;
}
