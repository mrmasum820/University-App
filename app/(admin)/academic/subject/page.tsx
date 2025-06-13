import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const SubjectComponent = dynamic(
  () => import("@/components/admin/academic/subject/subject.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <SubjectComponent />
    </Suspense>
  );
}
