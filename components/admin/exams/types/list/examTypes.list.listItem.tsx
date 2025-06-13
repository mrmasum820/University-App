import { ExamTypesEntity, formatDateTime } from "@/common";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ExamTypesListListItem() {
  const columns: ColumnDef<ExamTypesEntity>[] = [
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
              <p className="mt-0 text-gray-900 font-semibold ">
                {name?.name ?? "Weekly Test"}
              </p>
            </div>
            <div
              className={cn(
                "absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition"
              )}
            >
              <div className="flex gap-2 mt-2">
                <Button.Link
                  as={Link}
                  href={`/academic/program/edit/${row.original.id}`}
                  variant="ghost"
                  size="none"
                >
                  Edit
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/academic/program/delete/${row.original.id}`}
                  variant="ghost"
                  size="none"
                  color="danger"
                >
                  Delete
                </Button.Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: "Created At",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return <p>{formatDateTime(created_at)}</p>;
      },
    },
    {
      accessorKey: "updated_at",
      header: "Updated At",
      cell: ({ row }) => {
        const { updated_at } = row.original;
        return <p>{formatDateTime(updated_at)}</p>;
      },
    },
  ];
  return columns;
}
