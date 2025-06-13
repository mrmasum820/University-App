import dynamic from "next/dynamic";
import { Suspense } from "react";
const InstituteComponent = dynamic(
  () => import("@/components/admin/institute/institute.component")
);

export default function Institute() {
  return (
    <Suspense fallback={<>Loading</>}>
      <InstituteComponent />
    </Suspense>
  );
}
