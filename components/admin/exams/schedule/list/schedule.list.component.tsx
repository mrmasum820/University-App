"use client";

import { ExamScheduleEntity } from "@/common";
import {
  examScheduleAllList,
  ExamScheduleQueryKey,
} from "@/common/api/exams/schedule.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ScheduleListListItem from "./schedule.list.listItem";
import ScheduleListFilter from "./schedule.list.filter";
import ScheduleListHeader from "./schedule.list.header";
import ScheduleListView from "./schedule.list.view";

export default function ScheduleListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ExamScheduleEntity>({
    fetchList: {
      queryKey: ExamScheduleQueryKey.ALL_List,
      queryFnApi: examScheduleAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ScheduleListListItem(),
    tableFilter: (params) => <ScheduleListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ScheduleListHeader />
      <ScheduleListView tableComponent={<table_hook.component />} />
    </div>
  );
}
