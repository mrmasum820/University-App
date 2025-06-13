import { IBaseEntity } from "../base.entity";

export interface SupplierEntity extends IBaseEntity {
  name: string;
  status: string;
}

export interface SupplierEntity extends IBaseEntity {
  name: string;
  image?: string;
  email: string;
  phone: string;
  address: string;
  address_second?: string;
  state?: string;
  city?: string;
  zip?: string;
  country?: string;
  note?: string;
  category_id: number;
  price: number;
  currency?: string;
  cost_price: number;
  selling_price: number;
  gross_margin: number;
  net_margin: number;
  status: string;
  category?: SuppliersCategory;
}

export interface SuppliersCategory {
  name: string;
  status: string;
  id: number;
  created_at: string;
  updated_at: string;
}
