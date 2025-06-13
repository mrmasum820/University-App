import { InstituteEntity } from "@/common";
import Status from "@/common/components/Status";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";

export default function InstituteListListItem() {
  const { isEditId } = useEditStore();
  const columns: ColumnDef<InstituteEntity>[] = [
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
      header: () => <span>Title</span>,
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
                <Button
                  onClick={() => isEditId(row.original.id)}
                  variant="ghost"
                  size="none"
                  startIcon="edit"
                >
                  Edit
                </Button>
              </div>
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "code",
      header: "Code",
      cell: ({ row }) => {
        const { code } = row.original;
        return <p>{code}</p>;
      },
    },
    {
      accessorKey: "cadits",
      header: "Cadits",
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
