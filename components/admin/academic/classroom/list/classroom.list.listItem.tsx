import { ClassroomEntity } from "@/common";
import Status from "@/common/components/Status";
// import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function ClassroomListListItem() {
  // const { isEditId } = useEditStore();
  const columns: ColumnDef<ClassroomEntity>[] = [
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
      accessorKey: "code",
      header: "Category",
      cell: ({ row }) => {
        const { code } = row.original;
        return <p>{code}</p>;
      },
    },
    {
      accessorKey: "cadits",
      header: "Capacity",
      cell: ({ row }) => {
        const { cadits } = row.original;
        return <p>{cadits}</p>;
      },
    },
    {
      accessorKey: "num_of_subjects",
      header: "Time Duration",
      cell: ({ row }) => {
        const { cadits } = row.original;
        return <p>{cadits}</p>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <Status status={row?.original?.status} />,
    },
  ];
  return columns;
}
