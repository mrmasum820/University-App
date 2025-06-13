
interface SubItemData {
    main: string;
    subtitle?: string;
}

export type LeadEntity = {
id: number;
name: string;
passport: string;
agent: SubItemData;
source: string;
interest: string;
city: string;
status: string;
date: SubItemData;
}
