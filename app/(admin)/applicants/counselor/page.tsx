import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const CounselorComponent = dynamic(
  () => import("@/components/admin/applicants/counselor/counselor.component")
);
export default function Counselor() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <CounselorComponent />
    </Suspense>
  );
}
