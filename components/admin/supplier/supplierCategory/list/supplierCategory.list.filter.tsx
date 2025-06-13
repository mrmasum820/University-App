import {
  AgentsEntity,
  DropdownFilterType,
  refetchFn,
  TableFilterProps,
  TrashEntity,
} from "@/common";
import { SupplierCategoryQueryKey, supplierCategoryTrash } from "@/common/api";
import { ActionDropdown, Button } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function SearviceCategoryListFilter({
  table,
}: TableFilterProps<AgentsEntity>) {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      status: "",
    },
  });

  const mutation = useMutation<TrashEntity, Error, TrashEntity>({
    mutationKey: [SupplierCategoryQueryKey.Delete],
    mutationFn: (value) => supplierCategoryTrash(value),
    onSettled: () => {
      refetchFn(queryClient, SupplierCategoryQueryKey.ALL_List);
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
                      { id: 3, label: "Trash" },
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
