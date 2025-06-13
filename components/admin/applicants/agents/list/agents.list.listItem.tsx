import { AgentsEntity, formatDateTime } from "@/common";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function AgentsListListItem() {
  const columns: ColumnDef<AgentsEntity>[] = [
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
    // {
    //   accessorKey: "Image",
    //   header: () => <span>Image</span>,
    //   cell: ({ row }) => {
    //     const { image } = row.original;
    //     return (
    //       <div className="w-10 h-10 rounded-md overflow-hidden">
    //         {image && image !== "" ? (
    //           <Image
    //             width={100}
    //             height={80}
    //             src={`${API_IMAGE_URL}${image}`}
    //             alt="Thumbnail"
    //             className="w-full h-full object-cover rounded-md"
    //           />
    //         ) : (
    //           <Image
    //             width={100}
    //             height={80}
    //             src={`/assets/avatar.png`}
    //             alt="Thumbnail"
    //             className="w-full h-full object-cover rounded-md"
    //           />
    //         )}
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const { name } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500 font-semibold">{name}</div>
            </div>
            <div
              className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
            >
              <div className="flex gap-2">
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
      accessorKey: "phone",
      header: "Mobile Number",
      cell: ({ row }) => {
        const { phone } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-gray-500 font-semibold">
              {phone}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "counselor",
      header: "Counselor",
      cell: ({ row }) => {
        const { counselor } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-gray-500 font-semibold">
              {counselor?.name ?? "N/A"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "mail",
      header: "Mail",
      cell: ({ row }) => {
        const { mail } = row.original;
        return (
          <div>
            <span className="px-3 py-2 text-gray-500 font-semibold">
              {mail?.name ?? "example.com"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: "Date",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return (
          <div className="mt-2">
            <p className="text-gray-500 font-semibold">
              {formatDateTime(created_at)}
            </p>
          </div>
        );
      },
    },
  ];
  return columns;
}
