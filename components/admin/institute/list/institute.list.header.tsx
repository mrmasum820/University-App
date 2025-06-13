import { OutlineButton } from "@/uikit/ui";

export default function InstituteListHeader() {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold">Institute</h2>
      <div className="ml-4">
        <OutlineButton.Link
          href="/institute/create"
          variant="outline"
          className="px-8"
        >
          Add New
        </OutlineButton.Link>
      </div>
    </div>
  );
}
