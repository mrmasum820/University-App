import { IBaseEntity } from "../base.entity";

export interface ExamsEntity extends IBaseEntity {
  name: string;
  type?: { name: string };
  course?: { name: string };
  created_at: string;
  start_time?: { name: string };
  end_time?: { name: string };
  pass_mark?: { number: number };
  total_marks?: { number: number };
  status?: string;
}
