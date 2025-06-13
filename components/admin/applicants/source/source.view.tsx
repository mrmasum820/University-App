"use client";

import SourceFormComponent from "./form/source.form.component";
import SourceListComponent from "./list/source.list.component";

export default function SourceView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <SourceFormComponent />
      </div>
      <div className="col-span-8 ">
        <SourceListComponent />
      </div>
    </div>
  );
}
