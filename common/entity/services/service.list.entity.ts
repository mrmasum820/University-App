import { IBaseEntity } from "../base.entity";

export interface ServiceListEntity extends IBaseEntity {
  slug: any;
  title: string;
  status: string;
  fees: SFee[];
  category: SCategory;
}

export interface SFee {
  id: number;
  name: string;
  fee_type_id: number;
  amount: number;
  discount?: number;
  sub_total: number;
  fee_type: FeeType;
}

export interface FeeType {
  id: number;
  name: string;
}

export interface SCategory {
  id: number;
  title: string;
  parent_id: number;
}
