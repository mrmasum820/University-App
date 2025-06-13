import dynamic from "next/dynamic";
import { Suspense } from "react";
const RoleListComponent = dynamic(
  () => import("@/components/admin/userManagement/roles/list/role.list.component")
);
export default function User() {
  return (
    <Suspense fallback={<></>}>
      <RoleListComponent />
    </Suspense>
  );
}
