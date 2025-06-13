import { ActionDropdown, OutlineButton } from "@/uikit/ui";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";

export default function LeaveListFilter() {
  return (
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
  );
}
