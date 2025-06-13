import { ExamsEntity, formatDateTime } from "@/common";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ExamsListListItem() {
  const columns: ColumnDef<ExamsEntity>[] = [
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
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => {
        const { type } = row.original;
        return <p>{type?.name ?? "Monthly Test"}</p>;
      },
    },
    // {
    //   accessorKey: "course",
    //   header: "Course",
    //   cell: ({ row }) => {
    //     const { course } = row.original;
    //     return <p>{course?.name ?? "Mathematics"}</p>;
    //   },
    // },
    {
      accessorKey: "created_at",
      header: "Exam Time",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return <p>{formatDateTime(created_at)}</p>;
      },
    },
    {
      accessorKey: "start_time",
      header: "Start Time",
      cell: ({ row }) => {
        const { start_time } = row.original;
        return <p>{start_time?.name ?? "3:00 PM"}</p>;
      },
    },
    {
      accessorKey: "end_time",
      header: "End Time",
      cell: ({ row }) => {
        const { end_time } = row.original;
        return <p>{end_time?.name ?? "5:00 PM"}</p>;
      },
    },
    {
      accessorKey: "pass_mark",
      header: "Pass Marks",
      cell: ({ row }) => {
        const { pass_mark } = row.original;
        return <p>{pass_mark?.number ?? "35"}</p>;
      },
    },
    {
      accessorKey: "total_marks",
      header: "Total Marks",
      cell: ({ row }) => {
        const { total_marks } = row.original;
        return <p>{total_marks?.number ?? "100"}</p>;
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
