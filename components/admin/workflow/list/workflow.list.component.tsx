"use client";
import { WorkflowEntity } from "@/common";
import { WorkflowQueryKey, workflowsAllList } from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import WorkflowListFilter from "./workflow.list.filter";
import WorkflowListHeader from "./workflow.list.header";
import WorkflowListListItem from "./workflow.list.listItem";
import WorkflowListView from "./workflow.list.view";

export default function WorkflowListComponent() {
  const { getParam } = useQueryParams();
  const activeTab = getParam("status") || "active";
  const table_hook = useTable<WorkflowEntity>({
    fetchList: {
      queryKey: WorkflowQueryKey.ALL_List,
      queryFnApi: workflowsAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: activeTab,
      },
    },
    tableHeader: WorkflowListListItem(),
    tableFilter: (params) => <WorkflowListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <WorkflowListHeader />
      <WorkflowListView tableComponent={<table_hook.component />} />
    </div>
  );
}
