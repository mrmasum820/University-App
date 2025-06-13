import { ExamScheduleEntity, formatDateTime } from "@/common";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ScheduleListListItem() {
  const columns: ColumnDef<ExamScheduleEntity>[] = [
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
      accessorKey: "admission_number",
      header: "Admission No.",
      cell: ({ row }) => {
        const { admission_number } = row.original;
        return <p>{admission_number?.number ?? 12345}</p>;
      },
    },
    {
      accessorKey: "roll_number",
      header: "Roll No.",
      cell: ({ row }) => {
        const { roll_number } = row.original;
        return <p>{roll_number?.number ?? 102}</p>;
      },
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
      accessorKey: "attendance",
      header: "Attendance",
      cell: ({ row }) => {
        const { attendance } = row.original;
        return <p>{attendance?.name ?? "Absent"}</p>;
      },
    },
    {
      accessorKey: "created_at",
      header: "Date",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return <p>{formatDateTime(created_at)}</p>;
      },
    },

    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   cell: ({ row }) => <Status status={row?.original?.status} />,
    // },
  ];
  return columns;
}
