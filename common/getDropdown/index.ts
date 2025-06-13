import {
  agentsList,
  AgentsQueryKey,
  counselorList,
  CounselorQueryKey,
  fetchSearviceCountryAllList,
  SearviceCountryQueryKey,
  serviceCategoryList,
  ServiceCategoryQueryKey,
  serviceCountryList,
  serviceList,
  ServiceQueryKey,
  sourceList,
  SourceQueryKey,
  supplierCategoryList,
  SupplierCategoryQueryKey,
  WorkflowQueryKey,
  workflowsList,
} from "../api";
import {
  serviceFeesList,
  ServiceFeesTypeQueryKey,
} from "../api/services/serviceFeesType";
import { getDropdownServer } from "../function";

export function getParentCategoryList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: ServiceCategoryQueryKey.List,
    queryFnApi: serviceCategoryList,
    keyName: { label: "title", value: "id" },
  });
  return dataSource?.data || [];
}
export function getSubCategoryList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: ServiceCategoryQueryKey.List,
    queryFnApi: serviceCategoryList,
    keyName: { label: "title", value: "id" },
  });
  return dataSource?.data || [];
}
export function getChildCategoryList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: ServiceCategoryQueryKey.List,
    queryFnApi: serviceCategoryList,
    keyName: { label: "title", value: "id" },
  });
  return dataSource?.data || [];
}

export function getServiceFeesList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: ServiceFeesTypeQueryKey.List,
    queryFnApi: serviceFeesList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}

export function getWorkflowList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: WorkflowQueryKey.LIST,
    queryFnApi: workflowsList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}

export function getAgentsList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: AgentsQueryKey.List,
    queryFnApi: agentsList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}
export function getServiceList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: ServiceQueryKey.List,
    queryFnApi: serviceList,
    keyName: { label: "title", value: "id" },
  });
  return dataSource?.data || [];
}

export function getCounselorsList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: CounselorQueryKey.List,
    queryFnApi: counselorList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}

export function getSupperlierCategoryList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: SupplierCategoryQueryKey.List,
    queryFnApi: () => supplierCategoryList(),
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}

export function getSourceList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: SourceQueryKey.List,
    queryFnApi: sourceList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}
export function getServiceContryList<T>() {
  const dataSource = getDropdownServer<T>({
    queryKey: SearviceCountryQueryKey.List,
    queryFnApi: serviceCountryList,
    keyName: { label: "name", value: "id" },
  });
  return dataSource?.data || [];
}
