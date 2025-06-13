"use client";
import { applicantAllList, ApplicantQueryKey } from "@/common/api";
import { useQueryParams } from "@/hooks";
import useTable from "@/hooks/useTable";
import { useSearchParams } from "next/navigation";
import LeadListFilter from "./applicant.list.filter";
import ApplicantListHeader from "./applicant.list.header";
import LeadListListItem from "./applicant.list.listItem";
import ApplicantListView from "./applicant.list.view";
import { ApplicantEntity } from "@/common";

export default function ApplicantListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";
  const table_hook = useTable<ApplicantEntity>({
    fetchList: {
      queryKey: ApplicantQueryKey.ALL_List,
      queryFnApi: applicantAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: LeadListListItem(),
    tableFilter: (params) => <LeadListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ApplicantListHeader />
      <ApplicantListView tableComponent={<table_hook.component />} />
    </div>
  );
}
