import { IBaseEntity } from "../base.entity";

export interface ServiceCategoryEntity extends IBaseEntity {
  id: any;
  title: string;
  slug: string;
  parent_id: number;
  description: string;
  status: string;
  sub_service_categories: ServiceCategoryEntity[];
  services: [];
}
