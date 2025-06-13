import { IBaseEntity } from "../base.entity";
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
}

interface Employee {
  id: number;
  user: User;
}

interface Category {
  name: string;
  status: string; // Could be 'active' | 'inactive' if strict
  id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Institution {
  id: number;
  name: string;
}

interface Service {
  id: number;
  title: string;
}

export interface AgentsEntity extends IBaseEntity {
  employee_id: number;
  category_id: number;
  institution_id: number;
  service_id: number;
  image: string | null;
  name: string;
  phone: string;
  lead_count: number;
  counselor: { name: string };
  created_at: string;
  mail: { name: string };
}
