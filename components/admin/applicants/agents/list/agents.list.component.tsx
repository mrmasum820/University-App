"use client";
import { AgentsEntity } from "@/common";
import { agentsAllList, AgentsQueryKey } from "@/common/api";
import useTable from "@/hooks/useTable";
import AgentsListFilter from "./agents.list.filter";
import AgentsListHeader from "./agents.list.header";
import ServiceListItem from "./agents.list.listItem";
import AgentsListView from "./agents.list.view";
import { useQueryParams } from "@/hooks";
import { useSearchParams } from "next/navigation";

export default function AgentsListComponent() {
  const { getParam } = useQueryParams();
  const activeTab = getParam("status") || "";
  const table_hook = useTable<AgentsEntity>({
    fetchList: {
      queryKey: AgentsQueryKey.ALL_List,
      queryFnApi: agentsAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: activeTab,
      },
    },
    tableHeader: ServiceListItem(),
    tableFilter: (params) => <AgentsListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <AgentsListHeader />
      <AgentsListView tableComponent={<table_hook.component />} />
    </div>
  );
}
