import { IBaseEntity } from "../base.entity";

export interface ServiceCountryEntity extends IBaseEntity {
  name: string;
  roules?: string;
  status: string;
}
      