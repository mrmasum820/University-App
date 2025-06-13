import dynamic from "next/dynamic";
import { Suspense } from "react";
const ApplicantComponent = dynamic(
  () => import("@/components/admin/applicants/applicant.component")
);

export default function Lead() {
  return (
    <Suspense fallback={<>Loading</>}>
      <ApplicantComponent />
    </Suspense>
  );
}
