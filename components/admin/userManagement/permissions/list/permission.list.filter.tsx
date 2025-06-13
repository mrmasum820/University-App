import { ActionDropdown, OutlineButton } from "@/uikit/ui";
export default function PermissionListFilter() {
  return (
    <div className="md:flex items-center mb-4">
      <div className="min-w-56 md:mr-1">
        <ActionDropdown
          onChange={(e) => console.log(e)}
          options={[{ id: 1, label: "Action" }]}
        />
      </div>
      <div className="md:mx-2">
        <OutlineButton className="px-8">Apply</OutlineButton>
      </div>
    </div>
  );
}
