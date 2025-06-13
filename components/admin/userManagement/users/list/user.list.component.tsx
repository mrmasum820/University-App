"use client";
import { UserEntity } from "@/common";
import { fetchUserLists, UserQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import UserListFilter from "./user.list.filter";
import UserListHeader from "./user.list.header";
import UserListListItem from "./user.list.listItem";
import UserListView from "./user.list.view";

export default function UserListComponent() {
  const table_hook = useTable<UserEntity>({
    fetchList: {
      queryKey: UserQueryKey,
      queryFnApi: fetchUserLists,
    },
    tableHeader: UserListListItem(),
    tableFilter: (params) => <UserListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <UserListHeader />
      <UserListView tableComponent={<table_hook.component />} />
    </div>
  );
}
