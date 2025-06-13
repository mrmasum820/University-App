import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const DepartmentListComponent = dynamic(
  () => import("@/components/admin/settings/department/department.component")
);
export default function Department() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <DepartmentListComponent />
    </Suspense>
  );
}
