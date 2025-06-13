"use client";

import { GradesEntity } from "@/common";
import { gradesAllList, GradesQueryKey } from "@/common/api/exams/grades.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import GradesListListItem from "./grades.list.listItem";
import GradesListFilter from "./grades.list.filter";
import GradesListHeader from "./grades.list.header";
import GradesListView from "./grades.list.view";

export default function GradesListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<GradesEntity>({
    fetchList: {
      queryKey: GradesQueryKey.ALL_List,
      queryFnApi: gradesAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: GradesListListItem(),
    tableFilter: (params) => <GradesListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <GradesListHeader />
      <GradesListView tableComponent={<table_hook.component />} />
    </div>
  );
}
