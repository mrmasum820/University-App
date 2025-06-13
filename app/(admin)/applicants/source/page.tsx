import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const SourceComponent = dynamic(
  () => import("@/components/admin/applicants/source/source.component"),
);
export default function Counselor() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <SourceComponent />
    </Suspense>
  );
}
