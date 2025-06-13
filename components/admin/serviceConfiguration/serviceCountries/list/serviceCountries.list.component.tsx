"use client";
import {
  fetchSearviceCountryAllList,
  SearviceCountryQueryKey,
} from "@/common/api";
import { ServiceCountryEntity } from "@/common/entity/services/serviceCountry.entity";
import useTable from "@/hooks/useTable";
import ServiceCountryListFilter from "./serviceCountries.list.filter";
import ServiceCountryListHeader from "./serviceCountries.list.header";
import ServiceCountryListListItem from "./serviceCountries.list.listItem";
import ServiceCountryListView from "./serviceCountries.list.view";
import { useQueryParams } from "@/hooks";
import { useSearchParams } from "next/navigation";

export default function ServiceCountryListComponent() {
  const { getParam } = useQueryParams();
  const statusParams = getParam("status") || "active";

  const table_hook = useTable<ServiceCountryEntity>({
    fetchList: {
      queryKey: SearviceCountryQueryKey.ALLList,
      queryFnApi: fetchSearviceCountryAllList,
      params: {
        page: Number(useSearchParams().get("page")) || 1,
        per_page: 5,
        status: statusParams,
      },
    },
    tableHeader: ServiceCountryListListItem(),
    tableFilter: (params) => <ServiceCountryListFilter {...params} />,
  });
  return (
    <div className="p-2">
      <ServiceCountryListHeader />
      <ServiceCountryListView tableComponent={<table_hook.component />} />
    </div>
  );
}
