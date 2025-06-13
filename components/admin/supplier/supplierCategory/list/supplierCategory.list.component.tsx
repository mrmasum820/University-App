"use client";
import { SupplierCategoryEntity } from "@/common";
import {
  supplierCategoryAllList,
  SupplierCategoryQueryKey
} from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import SupplierCategoryListFilter from "./supplierCategory.list.filter";
import SupplierCategoryListHeader from "./supplierCategory.list.header";
import SupplierCategoryListListItem from "./supplierCategory.list.listItem";
import SupplierCategoryListView from "./supplierCategory.list.view";

export default function SupplierCategoryListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<SupplierCategoryEntity>({
    fetchList: {
      queryKey: SupplierCategoryQueryKey.ALL_List,
      queryFnApi: supplierCategoryAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: SupplierCategoryListListItem(),
    tableFilter: (params) => <SupplierCategoryListFilter {...params} />,
  });
  
  return (
    <div className="p-2">
      <SupplierCategoryListHeader />
      <SupplierCategoryListView tableComponent={<table_hook.component />} />
    </div>
  );
}
