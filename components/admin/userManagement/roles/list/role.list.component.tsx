"use client";
import { RoleEntity } from "@/common";
import { fetchRoleList, RoleQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import RoleListFilter from "./role.list.filter";
import RoleListHeader from "./role.list.header";
import RoleListListItem from "./role.list.listItem";
import RoleListView from "./role.list.view";

export default function RoleListComponent() {
  const table_hook = useTable<RoleEntity>({
    fetchList: {
      queryKey: RoleQueryKey,
      queryFnApi: fetchRoleList,
    },
    tableHeader: RoleListListItem(),
    tableFilter: (params) => <RoleListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <RoleListHeader />
      <RoleListView tableComponent={<table_hook.component />} />
    </div>
  );
}
