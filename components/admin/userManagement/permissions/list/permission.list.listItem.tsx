import { PermissionEntity } from "@/common";
import { cn } from "@/uikit";
import { Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function PermissionListListItem() {
  const columns: ColumnDef<PermissionEntity>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          id="select-all-leads"
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
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
                <Link href={"#"} className="text-blue-500 cursor-pointer">
                  Edit
                </Link>
                <span className="text-gray-400">|</span>
                <Link href={"#"} className="text-red-500 cursor-pointer">
                  Trash
                </Link>
                <span className="text-gray-400">|</span>
                <Link href={"#"} className="text-blue-500 cursor-pointer">
                  View Application
                </Link>
              </div>
            </div>
          </>
        );
      },
    },
    
    {
      accessorKey: "code",
      header: () => <span>Code</span>,
      cell: ({ row }) => {
        const { code } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{code}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => {
        const { description } = row.original;
        return (
          <div>
            <p className="fmt-2 mb-4 text-gray-900 font-semibold ">{description}</p>
          </div>
        );
      },
    },
  ];
  return columns;
}
