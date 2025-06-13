import { formatDateTime, LeadEntity } from "@/common";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function LeadListListItem() {
  const columns: ColumnDef<LeadEntity>[] = [
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
        const {
          profile: { first_name, last_name },
          id,
        } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">
                {first_name} {last_name}
              </div>
            </div>
            <div
              className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
            >
              <div className="flex gap-2 mt-2">
                <Button.Link
                  as={Link}
                  href={"/lead/edit/" + id}
                  variant="ghost"
                  size="none"
                  startIcon="edit"
                >
                  Edit
                </Button.Link>
                {/* <span className="text-gray-400">|</span>
                    <Button.Link href={"/applicants/agents/create/"+id} variant="ghost" size="none" startIcon="add">
                        Make Applicants
                    </Button.Link> */}
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
        const {
          profile: { passport },
        } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">{passport}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "agent",
      header: () => <span>Counselor</span>,
      cell: ({ row }) => {
        const { counselor, agent } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{counselor?.name ?? "N/A"}</p>
            {agent?.name && (
              <p className="text-sm text-gray-500">AG: {agent?.name}</p>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "source",
      header: "Lead Source",
      cell: ({ row }) => {
        const { source } = row.original;
        return (
          <div>
            <p className="fmt-2 mb-4 text-gray-900 font-semibold ">
              {source?.name ?? "N/A"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "interest",
      header: "Interest",
      cell: ({ row }) => {
        const { study_destination } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {study_destination ?? "N/A"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: ({ row }) => {
        const {
          profile: { country },
        } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {country ?? "N/A"}
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
              {status ?? "N/A"}
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
            <p className="font-semibold">
              {created_at && formatDateTime(created_at)}
            </p>
          </div>
        );
      },
    },
  ];
  return columns;
}
