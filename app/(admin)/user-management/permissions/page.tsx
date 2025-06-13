"use client"
import dynamic from "next/dynamic";
import { Suspense } from "react";
const PermissionListComponent = dynamic(
  () => import("@/components/admin/userManagement/permissions/list/permission.list.component")
);
export default function Permission() {
  return (
    <Suspense fallback={<></>}>
      <PermissionListComponent />
    </Suspense>
  );
}
