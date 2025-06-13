import { Table } from "@tanstack/react-table";

export function getAllTableIds<T extends { id: number }>(table?: Table<T>): number[] {
    if (!table) return [];
    return table.getSelectedRowModel().rows.map((row) => row.original.id);
  }
  