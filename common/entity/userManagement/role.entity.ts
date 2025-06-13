import { PermissionEntity } from "./permission.entity";

export interface RoleEntity {
    id: number;
    name: string,
    department_id: number,
    permissions: PermissionEntity,
  }
