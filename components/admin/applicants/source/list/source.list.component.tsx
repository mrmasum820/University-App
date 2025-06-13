"use client";
import {
  SourceQueryKey,
  sourceAllList,
} from "@/common/api/applicants/source.api";
import { SourceEntity } from "@/common/entity/settings/source.entity";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import SourceListFilter from "./source.list.filter";
import SourceListHeader from "./source.list.header";
import SourceListListItem from "./source.list.listItem";
import SourceListView from "./source.list.view";

export default function SourceListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<SourceEntity>({
    fetchList: {
      queryKey: SourceQueryKey.ALL_List,
      queryFnApi: sourceAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: SourceListListItem(),
    tableFilter: (params) => (
      <SourceListFilter tableData={table_hook.tableData} {...params} />
    ),
  });
  return (
    <div className="p-2">
      <SourceListHeader />
      <SourceListView tableComponent={<table_hook.component />} />
    </div>
  );
}
