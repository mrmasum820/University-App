import { create } from "zustand";

interface EditState {
    id: number;
    isEdit:boolean;
    isEditId: (id:number) => void;
    isEditReset: () => void;
  }
  
  // Create Zustand store
  export const useEditStore = create<EditState>((set) => ({
    id: 0,
    isEdit: false,
    isEditId: (id: number) => {
      set({ id, isEdit: true });
    },
    isEditReset: () => {
      set({ id:0, isEdit: false });
    },
  }));