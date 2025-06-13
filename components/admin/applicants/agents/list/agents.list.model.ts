interface SubItemData {
  main: string;
  subtitle?: string;
}

export type AddServiceEntity = {
  id: number;
  image: string;
  name: string;
  phone: string;
  lead_count: number;
  counselor: string;
  date: SubItemData;
};
