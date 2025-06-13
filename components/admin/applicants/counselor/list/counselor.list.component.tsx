"use client";
import { CounselorEntity } from "@/common";
import useTable from "@/hooks/useTable";
import CounselorListListItem from "./counselor.list.listItem";
import CounselorListFilter from "./counselor.list.filter";
import CounselorListHeader from "./counselor.list.header";
import CounselorListView from "./counselor.list.view";
import {
  counselorAllList,
  CounselorQueryKey,
} from "@/common/api/applicants/counselor.api";
import { useSearchParams } from "next/navigation";
import { useQueryParams } from "@/hooks";

export default function CounselorListComponent() {
  const { getParam } = useQueryParams();
  const activeTab = getParam("status") || "";
  const table_hook = useTable<CounselorEntity>({
    fetchList: {
      queryKey: CounselorQueryKey.ALL_List,
      queryFnApi: counselorAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: activeTab,
      },
    },
    tableHeader: CounselorListListItem(),
    tableFilter: (params) => <CounselorListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <CounselorListHeader />
      <CounselorListView tableComponent={<table_hook.component />} />
    </div>
  );
}
