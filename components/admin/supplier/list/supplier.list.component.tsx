"use client";
import { SupplierEntity } from "@/common";
import { supplierAllList, SuppliersQueryKey } from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import SupplierListFilter from "./supplier.list.filter";
import SupplierListHeader from "./supplier.list.header";
import SupplierListListItem from "./supplier.list.listItem";
import SupplierListView from "./supplier.list.view";

export default function SupplierListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<SupplierEntity>({
    fetchList: {
      queryKey: SuppliersQueryKey.ALL_List,
      queryFnApi: supplierAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: SupplierListListItem(),
    tableFilter: (params) => <SupplierListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <SupplierListHeader />
      <SupplierListView tableComponent={<table_hook.component />} />
    </div>
  );
}
