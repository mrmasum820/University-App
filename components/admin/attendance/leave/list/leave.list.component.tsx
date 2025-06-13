"use client";

import { LeaveEntity } from "@/common";
import { leaveAllList, LeaveQueryKey } from "@/common/api/attendance/leave.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import LeaveListListItem from "./leave.list.listItem";
import LeaveListFilter from "./leave.list.filter";
import LeaveListHeader from "./leave.list.header";
import LeaveListView from "./leave.list.view";

export default function LeaveListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<LeaveEntity>({
    fetchList: {
      queryKey: LeaveQueryKey.ALL_List,
      queryFnApi: leaveAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: LeaveListListItem(),
    tableFilter: (params) => <LeaveListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <LeaveListHeader />
      <LeaveListView tableComponent={<table_hook.component />} />
    </div>
  );
}
