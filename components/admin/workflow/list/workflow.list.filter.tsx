import {
  DropdownFilterType,
  refetchFn,
  TableFilterProps,
  TrashEntity,
  WorkflowEntity,
} from "@/common";
import { WorkflowQueryKey, workflowsTrash } from "@/common/api";
import { TableFilterItemTab } from "@/common/components";
import { ActionDropdown, OutlineButton } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function WorkflowListFilter({
  table,
  tableData,
}: TableFilterProps<WorkflowEntity>) {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      status: "",
    },
  });

  const mutation = useMutation<TrashEntity, Error, TrashEntity>({
    mutationKey: [WorkflowQueryKey.Delete],
    mutationFn: (value) => workflowsTrash(value),
    onSettled: () => {
      refetchFn(queryClient, WorkflowQueryKey.ALL_List);
      table.toggleAllRowsSelected(false);
    },
  });

  const onActionTrash: SubmitHandler<DropdownFilterType> = async (
    data: DropdownFilterType
  ) => {
    const tableId = table
      ?.getSelectedRowModel()
      ?.rows?.map((row: { original: { id: number } }) => row.original.id);
    mutation.mutateAsync({
      ids: tableId,
      status: data?.status,
    });
  };

  return (
    <>
      <TableFilterItemTab tableData={tableData} />

      <div className="md:flex items-center mb-4">
        <form
          onSubmit={handleSubmit(onActionTrash)}
          className="md:flex items-center mb-4"
        >
          <div className="min-w-56 md:mr-1">
            <Controller
              control={control}
              name="status"
              render={({ field }) => {
                return (
                  <ActionDropdown
                    onChange={(e) => field.onChange(e?.label?.toLowerCase())}
                    options={[
                      { id: 1, label: "Draft" },
                      { id: 2, label: "Trash" },
                      { id: 3, label: "Active" },
                    ]}
                  />
                );
              }}
            />
          </div>
          <div className="md:mx-2">
            <OutlineButton type="submit" className="px-8">
              Apply
            </OutlineButton>
          </div>
        </form>
      </div>
    </>
  );
}
