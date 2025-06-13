"use client";
import { PermissionEntity } from "@/common";
import { fetchPermissionList, PermissionQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import PermissionListFilter from "./permission.list.filter";
import PermissionListHeader from "./permission.list.header";
import PermissionListListItem from "./permission.list.listItem";
import PermissionListView from "./permission.list.view";

export default function PermissionListComponent() {
  const table_hook = useTable<PermissionEntity>({
    fetchList: {
      queryKey: PermissionQueryKey,
      queryFnApi: fetchPermissionList,
    },
    tableHeader: PermissionListListItem(),
    tableFilter: (params) => <PermissionListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <PermissionListHeader />
      <PermissionListView tableComponent={<table_hook.component />} />
    </div>
  );
}
