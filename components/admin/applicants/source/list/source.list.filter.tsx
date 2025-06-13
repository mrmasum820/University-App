import {
  refetchFn,
  TableFilterProps,
  TrashDropdownType,
  TrashEntity,
} from "@/common";
import { SourceQueryKey, sourceTrash } from "@/common/api";
import { TableFilterItemTab } from "@/common/components";
import { SourceEntity } from "@/common/entity/settings/source.entity";
import { ActionDropdown, Button } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function SourceListFilter({
  table,
  tableData,
}: TableFilterProps<SourceEntity>) {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      status: "",
    },
  });

  const mutation = useMutation<TrashEntity, Error, TrashEntity>({
    mutationKey: [SourceQueryKey.Delete],
    mutationFn: (value) => sourceTrash(value),
    onSettled: () => {
      refetchFn(queryClient, SourceQueryKey.ALL_List);
      table.toggleAllRowsSelected(false);
    },
  });

  const onActionTrash: SubmitHandler<TrashDropdownType> = async (
    data: TrashDropdownType
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
                      { id: 1, label: "Active" },
                      { id: 2, label: "Draft" },
                      { id: 3, label: "Trash" }
                    ]}
                  />
                );
              }}
            />
          </div>
          <div className="md:mx-2">
            <Button type="submit" className="px-8" variant="outline">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
