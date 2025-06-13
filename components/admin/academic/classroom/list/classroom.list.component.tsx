"use client";

import { ClassroomEntity } from "@/common";
import {
  classroomAllList,
  ClassroomQueryKey,
} from "@/common/api/academic/classroom.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ClassroomListListItem from "./classroom.list.listItem";
import ClassroomListFilter from "./classroom.list.filter";
import ClassroomListHeader from "./classroom.list.header";
import ClassroomListView from "./classroom.list.view";

export default function ClassroomListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ClassroomEntity>({
    fetchList: {
      queryKey: ClassroomQueryKey.ALL_List,
      queryFnApi: classroomAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ClassroomListListItem(),
    tableFilter: (params) => <ClassroomListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ClassroomListHeader />
      <ClassroomListView tableComponent={<table_hook.component />} />
    </div>
  );
}
