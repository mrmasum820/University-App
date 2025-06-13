import {
  formatDateTime,
  refetchFn,
  SupplierCategoryEntity,
  TrashEntity,
} from "@/common";
import { SupplierCategoryQueryKey, supplierCategoryTrash } from "@/common/api";
import Status from "@/common/components/Status";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";

export default function SupplierCategoryListListItem() {
  const { isEditId } = useEditStore();
  const queryClient = useQueryClient();

  const mutation = useMutation<TrashEntity, Error, TrashEntity>({
    mutationKey: [SupplierCategoryQueryKey.Delete],
    mutationFn: (value) => supplierCategoryTrash(value),
    onSettled: () => {
      refetchFn(queryClient, SupplierCategoryQueryKey.ALL_List);
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate({ ids: [id], status: "trash" });
  };

  const columns: ColumnDef<SupplierCategoryEntity>[] = [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <Checkbox
            id="select-all-leads"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        );
      },
      cell: ({ row }) => (
        <div className="">
          <Checkbox
            id={`select-lead-${row.id}`}
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: () => <span>Name</span>,
      cell: ({ row }) => {
        const { name } = row.original;
        return (
          <>
            <div>
              <p className="mt-0 text-gray-900 font-semibold ">{name}</p>
            </div>
            <div
              className={cn(
                "absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition"
              )}
            >
              <div className="flex gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="none"
                  startIcon="edit"
                  onClick={() => isEditId(row.original.id)}
                >
                  Edit
                </Button>
                |
                <Button
                  variant="ghost"
                  size="none"
                  startIcon="trash"
                  color="danger"
                  onClick={() => handleDelete(row.original.id)}
                >
                  Trash
                </Button>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const { status } = row.original;
        return <Status status={status} />;
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return (
          <div className="mt-2">
            {created_at && (
              <p className="font-semibold">{formatDateTime(created_at)}</p>
            )}
          </div>
        );
      },
    },
  ];
  return columns;
}
