"use client";
import { serviceAllList, ServiceQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import ServiceListFilter from "./service.list.filter";
import ServiceListHeader from "./service.list.header";
import ServiceListItem from "./service.list.listItem";
import ServiceListView from "./service.list.view";
import { ServiceListEntity } from "@/common";
import { useQueryParams } from "@/hooks";
import { useSearchParams } from "next/navigation";

export default function ServiceListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";

  const table_hook = useTable<ServiceListEntity>({
    fetchList: {
      queryKey: ServiceQueryKey.ALL_List,
      queryFnApi: serviceAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ServiceListItem(),
    tableFilter: (params) => <ServiceListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ServiceListHeader />
      <ServiceListView tableComponent={<table_hook.component />} />
    </div>
  );
}
