import { formatDateTime, LeaveEntity } from "@/common";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function LeaveListListItem() {
  const columns: ColumnDef<LeaveEntity>[] = [
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
      header: "Student Name",
      cell: ({ row }) => {
        const { name, id } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500 font-semibold">{name}</div>
            </div>
            <div
              className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
            >
              <div className="flex gap-2 mt-2">
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                >
                  ID: SL3659
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                >
                  Approve
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                  color="danger"
                >
                  Disapprove
                </Button.Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "program",
      header: () => <span>Program</span>,
      cell: ({ row }) => {
        const { program } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {program?.name ?? "BBA"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "subject",
      header: () => <span>Subject</span>,
      cell: ({ row }) => {
        const { subject } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {subject?.name ?? "English"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "apply_date",
      header: "Apply Date",
      cell: ({ row }) => {
        const { apply_date } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{apply_date?.time ?? "19-03-2024"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "from_date",
      header: "From Date",
      cell: ({ row }) => {
        const { from_date } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{from_date?.time ?? "20-03-2024"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "to_date",
      header: "To Date",
      cell: ({ row }) => {
        const { to_date } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{to_date?.time ?? "25-03-2024"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const { status } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-sm font-medium rounded bg-green-700 text-white">
              {status}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{formatDateTime(created_at)}</p>
          </div>
        );
      },
    },
  ];
  return columns;
}
