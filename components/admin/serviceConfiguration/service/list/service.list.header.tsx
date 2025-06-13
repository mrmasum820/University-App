import { OutlineButton } from "@/uikit/ui";

export default function ServiceListHeader() {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">Service</h2>
      <div className="ml-4">
        <OutlineButton.Link
          href="/service/create"
          variant="outline"
          className="px-8"
        >
          Add New
        </OutlineButton.Link>
      </div>
    </div>
  );
}
