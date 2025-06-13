"use client";
import { SupplierTypeEntity } from "@/common";
import { fetchSupplierTypesList, SupplierTypesQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import SupplierTypeListFilter from "./supplierType.list.filter";
import SupplierTypeListHeader from "./supplierType.list.header";
import SupplierTypeListListItem from "./supplierType.list.listItem";
import SupplierTypeListView from "./supplierType.list.view";

export default function SupplierTypeListComponent() {
  const table_hook = useTable<SupplierTypeEntity>({
    fetchList: {
      queryKey: SupplierTypesQueryKey.List,
      queryFnApi: fetchSupplierTypesList,
    },
    tableHeader: SupplierTypeListListItem(),
    tableFilter: (params) => <SupplierTypeListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <SupplierTypeListHeader />
      <SupplierTypeListView tableComponent={<table_hook.component />} />
    </div>
  );
}
