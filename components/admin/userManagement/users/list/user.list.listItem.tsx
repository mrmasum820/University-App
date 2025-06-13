import { UserEntity } from "@/common";
import { cn } from "@/uikit";
import { Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

export default function UserListListItem() {
  const columns: ColumnDef<UserEntity>[] = [
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
        if (image === null) {
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
            src={"/assets/avatar.png"}
            width={64}
            height={64}
            alt="Image"
            className="w-12 h-12 object-cover rounded"
          />;
        }
      },
    },

    {
      accessorKey: "username",
      header: () => <span>Username</span>,
      cell: ({ row }) => {
        const { username } = row.original;
        return (
          <>
            <div>
              <p className="mt-0 text-gray-900 font-semibold ">{username}</p>
            </div>
            <div
              className={cn(
                "absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition"
              )}
            >
              <div className="flex gap-2 mt-2">
                <Link href={"#"} className="text-blue-500 cursor-pointer">
                  Edit
                </Link>
                <span className="text-gray-400">|</span>
                <Link href={"#"} className="text-red-500 cursor-pointer">
                  Trash
                </Link>
                <span className="text-gray-400">|</span>
                <Link href={"#"} className="text-blue-500 cursor-pointer">
                  View Application
                </Link>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const { name } = row.original;
        return (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-gray-500">{name}</div>
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
    }
  ];
  return columns;
}
