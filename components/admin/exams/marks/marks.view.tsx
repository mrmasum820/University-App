"use client";

import MarksFormComponent from "./form/marks.form.component";
import MarksListComponent from "./list/marks.list.component";

export default function MarksView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <MarksFormComponent />
      </div>
      <div className="col-span-8 ">
        <MarksListComponent />
      </div>
    </div>
  );
}
