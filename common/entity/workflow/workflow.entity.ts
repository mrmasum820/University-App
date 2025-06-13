import { IBaseEntity } from "../base.entity";

interface WorkflowItem {
  name: string;
  description: string;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  status: "COMPLETED" | "SUSPENDED" | "IN_PROGRESS";
  workflow_id: number;
  created_at: string; // ISO date string
  updated_at: string | null; // Nullable
  id: number;
}

export interface WorkflowEntity extends IBaseEntity {
  name: string;
  description: string;
  status: "SUSPENDED" | "COMPLETED" | "IN_PROGRESS";
  id: number;
  created_at: string; // ISO date string
  updated_at: string | null; // Nullable
  created_by: string | null; // Nullable
  updated_by: string | null; // Nullable
  workflow_items: WorkflowItem[]; // Array of workflow items
}
