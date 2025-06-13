import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ProgramGroupComponent = dynamic(
  () =>
    import("@/components/admin/academic/programGroups/programGroups.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ProgramGroupComponent />
    </Suspense>
  );
}
