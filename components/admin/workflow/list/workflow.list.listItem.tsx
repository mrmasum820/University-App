import { formatDateTime, WorkflowEntity } from "@/common";
import Status from "@/common/components/Status";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";

export default function WorkflowListListItem() {
  const { isEditId } = useEditStore();
  const columns: ColumnDef<WorkflowEntity>[] = [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <Checkbox
            id="select-all-leads"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        );
      },
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
        const { name, id } = row.original;
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
                <Button variant="ghost" size="none" className="text-gray-600">
                  ID: SL{id}
                </Button>
                <span className="text-gray-400">|</span>
                <Button
                  variant="ghost" size="none" startIcon="edit"
                  onClick={() => isEditId(row.original.id)}
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
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const { status } = row.original;
        return <Status status={status} />;
      },
    },
    {
      accessorKey: "created_at",
      header: "Date",
      cell: ({ row }) => formatDateTime(row?.original.created_at),
    },
  ];
  return columns;
}
