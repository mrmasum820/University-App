export interface IBaseEntity {
  id: number;
  created_at?: string;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}
