import { DepartmentEntity } from "@/common";
import { cn } from "@/uikit";
import { Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function DepartmentListListItem() {
  const columns: ColumnDef<DepartmentEntity>[] = [
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
      header: "Code",
      cell: ({ row }) => {
        const { code } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{code}</div>
            </div>
          </>
        );
      },
    },
  ];
  return columns;
}
