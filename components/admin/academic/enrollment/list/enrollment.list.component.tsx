"use client";

import { EnrollmentEntity } from "@/common";
import {
  enrollmentAllList,
  EnrollmentQueryKey,
} from "@/common/api/academic/enrollment.api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import EnrollmentListListItem from "./enrollment.list.listItem";
import EnrollmentListFilter from "./enrollment.list.filter";
import EnrollmentListHeader from "./enrollment.list.header";
import EnrollmentListView from "./enrollment.list.view";

export default function EnrollmentListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<EnrollmentEntity>({
    fetchList: {
      queryKey: EnrollmentQueryKey.ALL_List,
      queryFnApi: enrollmentAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: EnrollmentListListItem(),
    tableFilter: (params) => <EnrollmentListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <EnrollmentListHeader />
      <EnrollmentListView tableComponent={<table_hook.component />} />
    </div>
  );
}
