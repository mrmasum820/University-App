import { AttendanceEntity, formatDateTime } from "@/common";
import { Checkbox } from "@/uikit/ui";
import RadioButton from "@/uikit/ui/basic/RadioButton";
import { ColumnDef } from "@tanstack/react-table";

export default function AttendanceListListItem() {
  const columns: ColumnDef<AttendanceEntity>[] = [
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
      accessorKey: "admission_no",
      header: () => <span>Admission No</span>,
      cell: ({ row }) => {
        const { admission_no } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {admission_no?.number ?? 125652}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "roll_no",
      header: () => <span>Roll Number</span>,
      cell: ({ row }) => {
        const { roll_no } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {roll_no?.number ?? 2530365}
            </p>
          </div>
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
            <div
              className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
            >
              {/* <div className="flex gap-2 mt-2">
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                >
                  Edit
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                  color="danger"
                >
                  Trash
                </Button.Link>
                <span className="text-gray-400">|</span>
                <Button.Link
                  as={Link}
                  href={`/applicants/edit/${id}`}
                  variant="ghost"
                  size="none"
                >
                  Make Application
                </Button.Link>
              </div> */}
            </div>
          </>
        );
      },
    },
    {
      accessorKey: "attendance",
      header: () => <span>Attendance</span>,
      cell: ({ row }) => {
        const { attendance } = row.original;
        return (
          <div>
            {/* <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {attendance?.name ?? "Present"}
            </p> */}
            <RadioButton
              name="Set Attendance for Entire Class"
              options={[
                { label: "Present", value: "present" },
                { label: "Late", value: "late" },
                { label: "Absent", value: "absent" },
                { label: "Holiday", value: "holiday" },
                { label: "Half Day", value: "halfday" },
              ]}
              onChange={(e) => console.log(e)}
              selectedValue="present"
            />
          </div>
        );
      },
    },
    {
      accessorKey: "source",
      header: () => <span>Source</span>,
      cell: ({ row }) => {
        const { source } = row.original;
        return (
          <div>
            <p className="mt-2 mb-4 text-gray-900 font-semibold ">
              {source?.name ?? "Manual"}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "entry_time",
      header: "Entry Time",
      cell: ({ row }) => {
        const { entry_time } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{entry_time?.time ?? "10.30 AM"}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "exit_time",
      header: "Exit Time",
      cell: ({ row }) => {
        const { exit_time } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{exit_time?.time ?? "03.30 PM"}</p>
          </div>
        );
      },
    },
    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   cell: ({ row }) => {
    //     const { status } = row.original;
    //     return (
    //       <div>
    //         <span className="px-3 py-2 text-sm font-medium rounded bg-green-700 text-white">
    //           {status}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const { created_at } = row.original;
        return (
          <div className="mt-2">
            <p className="font-semibold">{formatDateTime(created_at)}</p>
          </div>
        );
      },
    },
  ];
  return columns;
}
