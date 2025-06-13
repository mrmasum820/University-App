import { Lead } from "../applicants";
import { IBaseEntity } from "../base.entity";

export interface AttendanceEntity extends IBaseEntity {
  name: string;
  admission_no: { number: number };
  roll_no: { number: number };
  attendance: { name: string };
  source: { name: string };
  entry_time: { time: string };
  exit_time: { time: string };
  created_at: string;
  date: Date;
  lead: Lead;
}
