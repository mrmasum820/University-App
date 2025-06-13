import { IBaseEntity } from "../base.entity";

export interface ApplicantEntity extends IBaseEntity {
  lead_id: number;
  total_fees: number;
  paid_fees: number;
  due_fees: number;
  balance_fees: number;
  is_paid: any;
  status: string;
  id: number;
  created_at: string;
  updated_at: string;
  lead: Lead;
}

export interface Lead {
    profile_id: number
    application_number: string
    application_date: string
    service_id: number
    employee_id: any
    service_name: any
    is_student: boolean
    made_of_study: string
    made_of_delivery: string
    study_destination: string
    application_type: string
    immigration_expiry: string
    source_id: number
    is_trams_condition_agreed: boolean
    note: string
    is_completed: any
    status: string
    create_by: number
    update_by: number
    id: number
    profile: Profile
    agent: Agent
    source: Source
    counselor: Counselor
    created_at: string
    updated_at: string
  }
  
  export interface Profile {
    image: any
    first_name: string
    last_name: string
    surname: any
    email: string
    contract_number: string
    contract_prefernace: string
    passport: string
    passport_issue_date: any
    passport_expiry_date: any
    gender: string
    marital_status: string
    date_of_birth: string
    nationality: string
    place_of_birth: any
    state: string
    city: string
    zip: string
    country: string
    address: string
    emergency_contact_id: number
    status: any
    id: number
    created_at: string
    updated_at: string
  }
  
  export interface Agent {
    id: number
    name: string
  }
  
  export interface Source {
    id: number
    name: string
  }
  
  export interface Counselor {
    id: number
    name: string
  }
  