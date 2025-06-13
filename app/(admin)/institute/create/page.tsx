import dynamic from "next/dynamic";
import { Suspense } from "react";
const InstituteFormComponent = dynamic(
  () => import("@/components/admin/institute/form/institute.form.component")
);

export default function InstituteCreate() {
  return (
    <Suspense fallback={<>Loading</>}>
      <InstituteFormComponent />
    </Suspense>
  );
}
