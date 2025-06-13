"use client";

import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ProgramsListListItem from "./program.list.listItem";
import ProgramsListFilter from "./program.list.filter";
import ProgramsListHeader from "./program.list.header";
import ProgramsListView from "./program.list.view";
import { ProgramsEntity } from "@/common";
import { programsAllList, ProgramsQueryKey } from "@/common/api";

export default function ProgramsListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ProgramsEntity>({
    fetchList: {
      queryKey: ProgramsQueryKey.ALL_List,
      queryFnApi: programsAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ProgramsListListItem(),
    tableFilter: (params) => <ProgramsListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ProgramsListHeader />
      <ProgramsListView tableComponent={<table_hook.component />} />
    </div>
  );
}
