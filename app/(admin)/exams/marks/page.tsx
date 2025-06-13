import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const MarksComponent = dynamic(
  () => import("@/components/admin/exams/marks/marks.component")
);
export default function Marks() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <MarksComponent />
    </Suspense>
  );
}
