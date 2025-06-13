import { CounselorEntity } from "@/common/entity/counselor/counselor.entity";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function CounselorListListItem() {
  const columns: ColumnDef<CounselorEntity>[] = [
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
              <div className="flex gap-2 mt-1">
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
      accessorKey: "address",
      header: "Designation",
      cell: ({ row }) => {
        const address = row?.original?.address;
        return address;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => {
        const email = row?.original?.email;
        return email;
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => {
        const phone = row?.original?.phone;
        return phone;
      },
    },
    // {
    //   accessorKey: "image",
    //   header: "Image",
    //   cell: ({ row }) => {
    //     const image = row?.original?.image as string;
    //     return <Image width={50} height={50} src={image} alt="image" />;
    //   },
    // },

    // {
    //   accessorKey: "city",
    //   header: "City",
    //   cell: ({ row }) => {
    //     const city = row?.original?.city;
    //     return city;
    //   },
    // },
    // {
    //   accessorKey: "state",
    //   header: "State",
    //   cell: ({ row }) => {
    //     const state = row?.original?.state;
    //     return state;
    //   },
    // },
    // {
    //   accessorKey: "country",
    //   header: "Country",
    //   cell: ({ row }) => {
    //     const country = row?.original?.country;
    //     return country;
    //   },
    // },
    // {
    //   accessorKey: "zip_code",
    //   header: "Zip Code",
    //   cell: ({ row }) => {
    //     const zipCode = row?.original?.zip_code;
    //     return zipCode;
    //   },
    // },
  ];
  return columns;
}
