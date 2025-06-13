"use client";
import { ActionDropdown, OutlineButton, TextField } from "@/uikit/ui";
import { Fragment } from "react";

export default function DepartmentListFilter() {

  return (
    <Fragment>
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
        <div className="mx-1">
          <TextField className="bg-white" placeholder="App ID or Passport No" />
        </div>
        <div className="mx-2">
          <OutlineButton className="px-8"> Filter </OutlineButton>
        </div>
      </div>
    </Fragment>
  );
}
