import {
  formatDateTime,
  ServiceListEntity
} from "@/common";
import { Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ServiceListItem() {


  const columns: ColumnDef<ServiceListEntity>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          id="select-all-service"
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
            id={`select-service-${row.id}`}
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
        const { title } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{title}</div>
            </div>
            <div
              className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
            >
              <div className="flex gap-2">
                <Link
                  href={`service/${row.original.id}`}
                  className="text-blue-500 cursor-pointer"
                >
                  Edit
                </Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "slug",
      header: "Slug",
      cell: ({ row }) => {
        const { slug } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-sm font-medium">
              {slug ?? "N/A"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "Category",
      header: "category",
      cell: ({ row }) => {
        const { category } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-sm font-medium">
              {category.title}
            </span>
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
            <p className="font-semibold">
              {created_at !== undefined ? formatDateTime(created_at!) : "N/A"}
            </p>
          </div>
        );
      },
    },
  ];
  return columns;
}
