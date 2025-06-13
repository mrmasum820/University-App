import { Suspense } from "react";
import dynamic from "next/dynamic";

const CounselorFormComponent = dynamic(
  () =>
    import(
      "@/components/admin/applicants/counselor/form/counselor.form.component"
    )
);
export default function CounselorEdit() {
  return (
    <Suspense fallback={null}>
      <CounselorFormComponent />
    </Suspense>
  );
}
