import { API_IMAGE_URL, SupplierEntity } from "@/common";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

export default function SupplierListListItem() {
  const columns: ColumnDef<SupplierEntity>[] = [
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
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        const { image } = row.original;
        if (image === null || image === "") {
          return (
            <>
              <Image
                src={"/assets/avatar.png"}
                width={64}
                height={64}
                alt="Image"
                className="w-12 h-12 object-cover rounded"
              />
            </>
          );
        } else {
          <Image
            src={`${API_IMAGE_URL}${image}`}
            width={64}
            height={64}
            alt="Image"
            className="w-12 h-12 object-cover rounded"
          />;
        }
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
              <div className="flex gap-2 mt-1">
                <Button.Link
                  as={Link}
                  href={`/suppliers/edit/${row.original.id}`}
                  size="none"
                  startIcon="edit"
                  variant="ghost"
                >
                  Edit
                </Button.Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => {
        const { phone } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{phone}</div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "email",
      header: () => <span>Email</span>,
      cell: ({ row }) => {
        const { email } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{email}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "city",
      header: () => <span>City</span>,
      cell: ({ row }) => {
        const { city } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{city ?? "N/A"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "State",
      header: () => <span>State</span>,
      cell: ({ row }) => {
        const { state } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{state ?? "N/A"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "Country",
      header: () => <span>Country</span>,
      cell: ({ row }) => {
        const { country } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{country ?? "N/A"}</p>
          </div>
        );
      },
    },
  ];
  return columns;
}
