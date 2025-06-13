"use client";
import { UserEntity } from "@/common";
import { DepartmentQueryKey, fetchDepartmentLists } from "@/common/api";
import useTable from "@/hooks/useTable";
import DepartmentListFilter from "./department.list.filter";
import DepartmentListHeader from "./department.list.header";
import DepartmentListListItem from "./department.list.listItem";
import DepartmentListView from "./department.list.view";

export default function DepartmentListComponent() {
  const table_hook = useTable<UserEntity>({
    fetchList: {
      queryKey: DepartmentQueryKey,
      queryFnApi: fetchDepartmentLists,
      params:{}
    },
    tableHeader: DepartmentListListItem(),
    tableFilter: (params) => <DepartmentListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <DepartmentListHeader />
      <DepartmentListView tableComponent={<table_hook.component />} />
    </div>
  );
}
