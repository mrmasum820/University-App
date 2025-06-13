import dynamic from "next/dynamic";
import { Suspense } from "react";
const UserListComponent = dynamic(
  () => import("@/components/admin/userManagement/users/list/user.list.component")
);
export default function User() {
  return (
    <Suspense fallback={<></>}>
      <UserListComponent />
    </Suspense>
  );
}
