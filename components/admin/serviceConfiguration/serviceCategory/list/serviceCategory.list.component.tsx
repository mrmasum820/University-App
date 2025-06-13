"use client";
import { ServiceCategoryEntity } from "@/common";
import { serviceCategoryAllList, ServiceCategoryQueryKey } from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ServiceCategoryListFilter from "./serviceCategory.list.filter";
import ServiceCategoryListHeader from "./serviceCategory.list.header";
import ServiceCategoryListListItem from "./serviceCategory.list.listItem";
import ServiceCategoryListView from "./serviceCategory.list.view";

export default function ServiceCategoryListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ServiceCategoryEntity>({
    fetchList: {
      queryKey: ServiceCategoryQueryKey.ALL_List,
      queryFnApi: serviceCategoryAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ServiceCategoryListListItem(),
    tableFilter: (params) => <ServiceCategoryListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ServiceCategoryListHeader />
      <ServiceCategoryListView tableComponent={<table_hook.component />} />
    </div>
  );
}
