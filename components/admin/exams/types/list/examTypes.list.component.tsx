"use client";

import { ExamTypesEntity } from "@/common";
import {
  examTypesAllList,
  ExamTypesQueryKey,
} from "@/common/api/exams/types.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ExamTypesListListItem from "./examTypes.list.listItem";
import ExamTypesListFilter from "./examTypes.list.filter";
import ExamTypesListHeader from "./examTypes.list.header";
import ExamTypesListView from "./examTypes.list.view";

export default function ExamTypesListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ExamTypesEntity>({
    fetchList: {
      queryKey: ExamTypesQueryKey.ALL_List,
      queryFnApi: examTypesAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ExamTypesListListItem(),
    tableFilter: (params) => <ExamTypesListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ExamTypesListHeader />
      <ExamTypesListView tableComponent={<table_hook.component />} />
    </div>
  );
}
