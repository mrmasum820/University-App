"use client";

import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import { InstituteEntity } from "@/common";
import {
  instituteAllList,
  InstituteQueryKey,
} from "@/common/api/institute/institute.api";
import InstituteListListItem from "./institute.list.listItem";
import InstituteListFilter from "./institute.list.filter";
import InstituteListHeader from "./institute.list.header";
import InstituteListView from "./institute.list.view";

export default function InstituteListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<InstituteEntity>({
    fetchList: {
      queryKey: InstituteQueryKey.ALL_List,
      queryFnApi: instituteAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: InstituteListListItem(),
    tableFilter: (params) => <InstituteListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <InstituteListHeader />
      <InstituteListView tableComponent={<table_hook.component />} />
    </div>
  );
}
