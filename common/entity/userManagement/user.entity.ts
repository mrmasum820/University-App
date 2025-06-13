import { IBaseEntity } from "../base.entity";
export interface UserEntity extends IBaseEntity {
    username: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string | null;
    passport_or_nid: string;
    nationality: string;
    gender: string;
    isForigner: boolean;
    role_id: number;
    department_id: number;
    is_active: boolean;
    is_superuser: boolean;
    status: string;
}


