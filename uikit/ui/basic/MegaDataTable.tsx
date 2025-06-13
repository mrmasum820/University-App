import React from "react";
import DataTableWithCheckbox from "./DataTableWithCheckbox";
import Dropdown from "./Dropdown";
import { OutlineButton } from "./OutlineButton";
import Pagination from "./Pagination";
import { TextField } from "./TextField";

interface Column<T> {
  key: keyof T;
  label: string;
  hidden?: boolean;
  color?: string;
}

interface DropdownData {
  id: number;
  name: string;
}

interface MegaDataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  applyLabel?: string;
  filterLabel?: string;
  filterSearchPlaceholder?: string;
  filterSearchValue?: string;
  actionDropdownDatas?: DropdownData[];
  actionLabel?: string;
  agentDropdownDatas?: DropdownData[];
  agentLabel?: string;
  statusDropdownDatas?: DropdownData[];
  statusLabel?: string;
  emptyState?: React.ReactNode;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemActionClassName?: string;
  onRowClick?: (row: T, index: number) => void;
  onEditRow?: (updatedRow: T, index: number) => void;
  onDeleteRow?: (row: T, index: number) => void;
  onBulkDelete?: (selectedRows: T[]) => void;
  onActionSelect?: (item: DropdownData) => void;
  onAgentSelect?: (item: DropdownData) => void;
  onStatusSelect?: (item: DropdownData) => void;
  onApplyFilter?: () => void;
  onFilter?: () => void;
  filterSearchOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPageChange?: (page: number) => void;
}

const MegaDataTable = <T,>({
  columns,
  data,
  applyLabel,
  filterLabel,
  filterSearchPlaceholder,
  filterSearchValue,
  emptyState,
  itemActionClassName = "left-46 top-12 bottom-0",
  currentPage,
  totalPages,
  totalItems,
  onRowClick,
  onDeleteRow,
  onEditRow,
  onBulkDelete,
  actionDropdownDatas,
  actionLabel = "Action",
  onActionSelect,
  agentDropdownDatas,
  agentLabel = "Agent",
  onAgentSelect,
  statusDropdownDatas,
  statusLabel = "Status",
  onStatusSelect,
  onApplyFilter,
  onFilter,
  filterSearchOnChange,
  onPageChange,
}: MegaDataTableProps<T>) => {
  return (
    <div>
      <div className="md:flex items-center mb-4">
        {/* actiondropdown datas */}
        <div className="min-w-40 md:mr-1">
          {actionDropdownDatas && (
            <Dropdown
              options={actionDropdownDatas.map((item) => item.name)}
              label={actionLabel}
              onSelect={(option) => {
                const selectedItem = actionDropdownDatas.find(
                  (item) => item.name === option
                );
                if (selectedItem && onActionSelect !== undefined) {
                  onActionSelect?.(selectedItem!);
                }
              }}
            />
          )}
        </div>
        {/* apply filter */}
        {applyLabel && (
          <div className="md:mx-2">
            <OutlineButton
              onClick={() => onApplyFilter}
              className="px-8"
            >{applyLabel}</OutlineButton>
          </div>
        )}
        {/* search filter */}
        {filterSearchPlaceholder && (
          <div className="mx-1">
            <TextField
              placeholder={filterSearchPlaceholder}
              className="bg-white"
              onChange={(e) => {
                filterSearchOnChange?.(e);
              }}
              value={filterSearchValue ?? ""}
            />
          </div>
        )}
        {/* agentdropdown datas */}
        <div className="min-w-40 mx-2">
          {agentDropdownDatas && (
            <Dropdown
              options={agentDropdownDatas.map((item) => item.name)}
              label={agentLabel}
              onSelect={(option) => {
                const selectedItem = agentDropdownDatas.find(
                  (item) => item.name === option
                );
                if (selectedItem && onActionSelect !== undefined) {
                  onAgentSelect?.(selectedItem!);
                }
              }}
            />
          )}
        </div>
        {/* statusdropdown datas */}
        <div className="min-w-40 md:mx-1">
          {statusDropdownDatas && (
            <Dropdown
              options={statusDropdownDatas.map((item) => item.name)}
              label={statusLabel}
              onSelect={(option) => {
                const selectedItem = statusDropdownDatas.find(
                  (item) => item.name === option
                );
                if (selectedItem && onActionSelect !== undefined) {
                  onStatusSelect?.(selectedItem!);
                }
              }}
            />
          )}
        </div>
        {/* apply filter */}
        {filterLabel && (
          <div className="mx-2">
            <OutlineButton
              onClick={() => onFilter}
              className="px-8"
              >{filterLabel}</OutlineButton>
          </div>
        )}
      </div>

      {/* table */}
      <DataTableWithCheckbox
        itemActionClassName={itemActionClassName}
        columns={columns}
        data={data}
        onDeleteRow={onDeleteRow}
        onEditRow={onEditRow}
        onRowClick={onRowClick}
        emptyState={emptyState}
        onBulkDelete={onBulkDelete}
      />

      {/* pagination */}
      {totalPages && (
        <div>
          <Pagination
            totalItems={totalItems}
            totalPages={totalPages}
            currentPage={currentPage ?? 1}
            onPageChange={(p) => {
              onPageChange?.(p);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MegaDataTable;
