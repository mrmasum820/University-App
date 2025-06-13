"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LeadFormComponent = dynamic(
  () =>
    import("@/components/admin/lead/form/lead.form.component")
);
export default function LeadEdit() {
  return (
    <Suspense fallback={null}>
      <LeadFormComponent />
    </Suspense>
  );
}
