import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const BatchComponent = dynamic(
  () => import("@/components/admin/academic/batch/batch.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <BatchComponent />
    </Suspense>
  );
}
