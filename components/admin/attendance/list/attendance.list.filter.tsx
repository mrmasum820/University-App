import { ActionDropdown, OutlineButton } from "@/uikit/ui";
import RadioButton from "@/uikit/ui/basic/RadioButton";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";

export default function AttendanceListFilter() {
  return (
    <>
      <div className="md:flex items-center mb-4">
        <div className="min-w-56 md:mr-1">
          <ActionDropdown
            onChange={(e) => console.log(e)}
            options={[
              { id: 1, label: "Active" },
              { id: 2, label: "Draft" },
              { id: 3, label: "Trash" },
            ]}
          />
        </div>
        <div className="min-w-56 md:mr-1">
          <ActionDropdown
            onChange={(e) => console.log(e)}
            options={[
              { id: 1, label: "Active" },
              { id: 2, label: "Draft" },
              { id: 3, label: "Trash" },
            ]}
          />
        </div>
        <div className="min-w-56 md:mr-1">
          <ActionDropdown
            onChange={(e) => console.log(e)}
            options={[
              { id: 1, label: "Active" },
              { id: 2, label: "Draft" },
              { id: 3, label: "Trash" },
            ]}
          />
        </div>
        <div className="mx-1">
          <TextFieldDate placeholder="06 Jun 2025" onChange={() => {}} />
        </div>
        <div className="md:mx-2">
          <OutlineButton className="px-8">Search</OutlineButton>
        </div>
      </div>
      <div className="md:flex items-center mb-4">
        <div className="min-w-56 md:mr-1">
          {/* <ActionDropdown
            onChange={(e) => console.log(e)}
            options={[
              { id: 1, label: "Active" },
              { id: 2, label: "Draft" },
              { id: 3, label: "Trash" },
            ]}
          /> */}
          <div className="flex items-center px-4 py-4 my-4 text-gray-700 bg-white border border-gray-300 rounded">
            <p className="font-semibold mr-4">
              Set Attendance for Entire Class
            </p>
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
        </div>
      </div>
    </>
  );
}
