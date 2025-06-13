import { ApplicantEntity, formatDateTime } from "@/common";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ApplicantListListItem() {
  const columns: ColumnDef<ApplicantEntity>[] = [
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
      header: "Name",
      cell: ({ row }) => {
        const { lead, id } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{lead?.profile?.first_name}</div>
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
                  Edit
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                  color="danger"
                >
                  Trash
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                >
                  Make Application
                </Button.Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "passport",
      header: () => <span>Passport</span>,
      cell: ({ row }) => {
        const { profile } = row.original.lead;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {profile?.passport}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "agent",
      header: () => <span>Agent</span>,
      cell: ({ row }) => {
        const { agent } = row.original.lead;
        return (
          <div className="mt-2">
            <p className="font-semibold">{agent?.name}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "source",
      header: "Lead Source",
      cell: ({ row }) => {
        const { source } = row.original.lead;
        return (
          <div>
            <p className="fmt-2 mb-4 text-gray-900 font-semibold ">
              {source.name}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "interest",
      header: "Interest",
      cell: ({ row }) => {
        const {} = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">{}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "city",
      header: "City",
      cell: ({ row }) => {
        const { profile } = row.original.lead;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {profile.city}
            </p>
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
