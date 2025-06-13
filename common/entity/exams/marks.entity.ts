import { IBaseEntity } from "../base.entity";

export interface MarksEntity extends IBaseEntity {
  name: string;
  student_name?: { name: string };
  teacher_name?: { name: string };
  marks_obtained?: { number: number };
  grade?: { name: string };
  created_at: string;
  updated_at: string;
  status?: string;
}
