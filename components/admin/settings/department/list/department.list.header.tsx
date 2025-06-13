import { OutlineButton } from "@/uikit/ui";

export default function DepartmentListHeader() {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">Department List</h2>
      <div className="ml-4">
        <OutlineButton.Link
          href="/settings/department/create"
          variant="outline"
          className="px-8"
        >
          Add New
        </OutlineButton.Link>
      </div>
    </div>
  );
}
