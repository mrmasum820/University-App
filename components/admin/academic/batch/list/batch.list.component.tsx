"use client";

import { BatchEntity } from "@/common";
import { batchAllList, BatchQueryKey } from "@/common/api/academic/batch.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import BatchListListItem from "./batch.list.listItem";
import BatchListFilter from "./batch.list.filter";
import BatchListHeader from "./batch.list.header";
import BatchListView from "./batch.list.view";

export default function BatchListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<BatchEntity>({
    fetchList: {
      queryKey: BatchQueryKey.ALL_List,
      queryFnApi: batchAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: BatchListListItem(),
    tableFilter: (params) => <BatchListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <BatchListHeader />
      <BatchListView tableComponent={<table_hook.component />} />
    </div>
  );
}
