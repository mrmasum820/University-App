import { IBaseEntity } from "../base.entity";

export interface LeaveEntity extends IBaseEntity {
  name: string;
  program: { name: string };
  subject: { name: string };
  apply_date: { time: string };
  from_date: { time: string };
  to_date: { time: string };
  status: string;
  created_at: string;
}
