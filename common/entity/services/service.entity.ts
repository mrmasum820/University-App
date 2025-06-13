import { IBaseEntity } from "../base.entity";
export interface ServiceEntity {
  title: string;
  category_id: number;
  description: string;
  sort_description: string;
  state: string;
  city: string;
  country_id: number;
  fees: Fee[];
  date: string;
  create_by: number;
  status: string;
  visibility: string;
  workflow: Workflow;
  publish_status: string;
  id: number;
}

export interface Fee {
  name: string;
  amount: number;
  discount?: number;
  sub_total: number;
  description: string;
  fee_type_id: number;
}

export interface Workflow {
  workflow_id: number;
  workflow_items: WorkflowItem[];
}

export interface WorkflowItem {
  workflow_item_id: number;
  status: string;
  is_active: boolean;
}
