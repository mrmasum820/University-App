import { formatDateTime } from "@/common";
import Status from "@/common/components/Status";
import { ServiceCountryEntity } from "@/common/entity/services/serviceCountry.entity";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Button, Checkbox } from "@/uikit/ui";
import { ColumnDef } from "@tanstack/react-table";

export default function ServiceCountryListListItem() {
  const { isEditId } = useEditStore();

  const columns: ColumnDef<ServiceCountryEntity>[] = [
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
      accessorKey: "title",
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
      accessorKey: "created_at",
      header: "Data",
      cell: ({ row }) => {
        const createDate = row?.original?.created_at as string;
        return formatDateTime(createDate);
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
