"use client";

import { MarksEntity } from "@/common";
import { marksAllList, MarksQueryKey } from "@/common/api/exams/marks.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import MarksListListItem from "./marks.list.listItem";
import MarksListFilter from "./marks.list.filter";
import MarksListHeader from "./marks.list.header";
import MarksListView from "./marks.list.view";

export default function MarksListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<MarksEntity>({
    fetchList: {
      queryKey: MarksQueryKey.ALL_List,
      queryFnApi: marksAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: MarksListListItem(),
    tableFilter: (params) => <MarksListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <MarksListHeader />
      <MarksListView tableComponent={<table_hook.component />} />
    </div>
  );
}
