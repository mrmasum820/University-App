"use client";

import { ExamsEntity } from "@/common";
import { examsAllList, ExamsQueryKey } from "@/common/api/exams/exams.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ExamsListListItem from "./exams.list.listItem";
import ExamsListFilter from "./exams.list.filter";
import ExamsListHeader from "./exams.list.header";
import ExamsListView from "./exams.list.view";

export default function ExamsListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ExamsEntity>({
    fetchList: {
      queryKey: ExamsQueryKey.ALL_List,
      queryFnApi: examsAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ExamsListListItem(),
    tableFilter: (params) => <ExamsListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ExamsListHeader />
      <ExamsListView tableComponent={<table_hook.component />} />
    </div>
  );
}
