import { SupplierTypeEntity } from "@/common";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function SupplierTypeListListItem() {
  const { isEditId } = useEditStore();
  const columns: ColumnDef<SupplierTypeEntity>[] = [
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
                  variant="solid"
                  onClick={() => isEditId(row.original.id)}
                >
                  Edit
                </Button>
                <span className="text-gray-400">|</span>
                <Link href={"#"} className="text-red-500 cursor-pointer">
                  Trash
                </Link>
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
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{status}</div>
            </div>
          </>
        );
      },
    },
  ];
  return columns;
}
