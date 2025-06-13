import { IBaseEntity } from "../base.entity";

export interface CounselorEntity extends IBaseEntity {
  name: string;
  email: string;
  phone: string;
  image: string | null;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}
