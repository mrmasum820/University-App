import { IBaseEntity } from "../base.entity";

export interface LeadEntity extends IBaseEntity {
  profile_id: number;
  application_number: string;
  application_date: any;
  service_id: number;
  employee_id: any;
  service_name: any;
  is_student: boolean;
  made_of_study: any;
  made_of_delivery: any;
  application_type: any;
  immigration_expiry: any;
  source_id: number;
  is_trams_condition_agreed: boolean;
  study_destination?:string;
  note: any;
  is_completed: any;
  status: string;
  create_by: string;
  update_by: any;
  profile: Profile;
  agent?: LeadAgent;
  source?: LeadSource;
  counselor?: LeadAgent;
}

interface LeadAgent {
  id?: number;
  name?: string;
}
interface LeadSource {
  id?: number;
  name?: string;
}

interface Profile {
  image: any;
  first_name: string;
  last_name: string;
  surname: any;
  email: string;
  contract_number: string;
  contract_prefernace: string;
  passport: string;
  passport_issue_date: any;
  passport_expiry_date: any;
  gender: string;
  marital_status: any;
  date_of_birth: any;
  nationality: string;
  place_of_birth: any;
  state: any;
  city: any;
  zip: any;
  country: string;
  address: any;
  guardian_id: any;
  emergency_contact_id: any;
  status: any;
  id: number;
  created_at: string;
  updated_at: any;
}
