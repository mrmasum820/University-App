"use client";

import { SubjectEntity } from "@/common";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import SubjectListListItem from "./subject.list.listItem";
import SubjectListFilter from "./subject.list.filter";
import SubjectListHeader from "./subject.list.header";
import SubjectListView from "./subject.list.view";
import {
  subjectAllList,
  SubjectQueryKey,
} from "@/common/api/academic/subject.api";

export default function SubjectListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<SubjectEntity>({
    fetchList: {
      queryKey: SubjectQueryKey.ALL_List,
      queryFnApi: subjectAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: SubjectListListItem(),
    tableFilter: (params) => <SubjectListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <SubjectListHeader />
      <SubjectListView tableComponent={<table_hook.component />} />
    </div>
  );
}
