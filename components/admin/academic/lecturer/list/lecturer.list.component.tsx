"use client";

import { LecturerEntity } from "@/common";
import {
  lecturerAllList,
  LecturerQueryKey,
} from "@/common/api/academic/lecturer.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import LecturerListListItem from "./lecturer.list.listItem";
import LecturerListFilter from "./lecturer.list.filter";
import LecturerListHeader from "./lecturer.list.header";
import LecturerListView from "./lecturer.list.view";

export default function LecturerListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<LecturerEntity>({
    fetchList: {
      queryKey: LecturerQueryKey.ALL_List,
      queryFnApi: lecturerAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: LecturerListListItem(),
    tableFilter: (params) => <LecturerListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <LecturerListHeader />
      <LecturerListView tableComponent={<table_hook.component />} />
    </div>
  );
}
