import { IBaseEntity } from "../base.entity";

export interface ExamAttendanceEntity extends IBaseEntity {
  name: string;
  admission_number?: { number: number };
  roll_number?: { number: number };
  attendance?: { name: string };
  created_at: string;
  status?: string;
}
