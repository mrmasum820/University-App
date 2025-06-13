"use client";
import { leadAllList, LeadQueryKey } from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import LeadListFilter from "./lead.list.filter";
import LeadListHeader from "./lead.list.header";
import LeadListListItem from "./lead.list.listItem";
import { LeadEntity } from "./lead.list.model";
import LeadListView from "./lead.list.view";

export default function LeadListComponent() {
  const { getParam } = useQueryParams();
  const statusFilter = getParam("status") || "";
  const table_hook = useTable<LeadEntity>({
    fetchList: {
      queryKey: LeadQueryKey.ALL_List,
      queryFnApi: leadAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusFilter,
      }
    },
    tableHeader: LeadListListItem(),
    tableFilter: (params) => <LeadListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <LeadListHeader />
      <LeadListView tableComponent={<table_hook.component />} />
    </div>
  );
}
