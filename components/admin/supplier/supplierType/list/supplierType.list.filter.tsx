import { DropdownFilterType, refetchFn, SupplierTypeEntity, TableFilterProps } from "@/common";
import { SupplierTypesQueryKey, supplierTypesTrash } from "@/common/api";
import { TableFilterItemTab } from "@/common/components";
import { ActionDropdown, OutlineButton } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type TrashEntity = {
  ids: number[];
  status: string;
};

export default function SupplierTypeListFilter({ table, tableData }: TableFilterProps<SupplierTypeEntity>) {
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      status: "",
    },
  });

  const mutation = useMutation<TrashEntity, Error, TrashEntity>({
    mutationKey: [SupplierTypesQueryKey.Delete],
    mutationFn: (value) => supplierTypesTrash(value),
    onSettled: () => {
      refetchFn(queryClient, SupplierTypesQueryKey.List);
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
                    options={[{ id: 1, label: "Trash" }]}
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
