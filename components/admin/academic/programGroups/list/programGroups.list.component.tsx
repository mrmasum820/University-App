"use client";

import { ProgramGroupsEntity } from "@/common";
import {
  programGroupsAllList,
  ProgramGroupsQueryKey,
} from "@/common/api/academic/programGroups.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import ProgramGroupsListListItem from "./programGroups.list.listItem";
import ProgramGroupsListFilter from "./programGroups.list.filter";
import ProgramGroupsListHeader from "./programGroups.list.header";
import ProgramGroupsListView from "./programGroups.list.view";

export default function ProgramGroupsListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ProgramGroupsEntity>({
    fetchList: {
      queryKey: ProgramGroupsQueryKey.ALL_List,
      queryFnApi: programGroupsAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ProgramGroupsListListItem(),
    tableFilter: (params) => <ProgramGroupsListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ProgramGroupsListHeader />
      <ProgramGroupsListView tableComponent={<table_hook.component />} />
    </div>
  );
}
