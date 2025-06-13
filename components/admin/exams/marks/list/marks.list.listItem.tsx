import { formatDateTime, MarksEntity } from "@/common";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function MarksListListItem() {
  const columns: ColumnDef<MarksEntity>[] = [
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
      header: () => <span>Exam Name</span>,
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
      accessorKey: "student_name",
      header: "Student Name",
      cell: ({ row }) => {
        const { student_name } = row.original;
        return <p>{student_name?.name ?? "John Smith"}</p>;
      },
    },
    {
      accessorKey: "teacher_name",
      header: "Teacher Name",
      cell: ({ row }) => {
        const { teacher_name } = row.original;
        return <p>{teacher_name?.name ?? "Mr. John"}</p>;
      },
    },
    {
      accessorKey: "marks_obtained",
      header: "Marks",
      cell: ({ row }) => {
        const { marks_obtained } = row.original;
        return <p>{marks_obtained?.number ?? 80}</p>;
      },
    },
    {
      accessorKey: "grade",
      header: "Grade",
      cell: ({ row }) => {
        const { grade } = row.original;
        return <p>{grade?.name ?? "A"}</p>;
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
