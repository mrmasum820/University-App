"use client";

import { ExamAttendanceEntity } from "@/common";
import {
  examAttendanceAllList,
  ExamAttendanceQueryKey,
} from "@/common/api/exams/attendance.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import AttendanceListListItem from "./attendance.list.listItem";
import AttendanceListFilter from "./attendance.list.filter";
import AttendanceListHeader from "./attendance.list.header";
import AttendanceListView from "./attendance.list.view";

export default function AttendanceListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ExamAttendanceEntity>({
    fetchList: {
      queryKey: ExamAttendanceQueryKey.ALL_List,
      queryFnApi: examAttendanceAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: AttendanceListListItem(),
    tableFilter: (params) => <AttendanceListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <AttendanceListHeader />
      <AttendanceListView tableComponent={<table_hook.component />} />
    </div>
  );
}
