import dynamic from "next/dynamic";
import { Suspense } from "react";
const ServiceComponent = dynamic(
  () => import("@/components/admin/serviceConfiguration/service/service.component")
);

export default function Service() {
  return (
    <Suspense fallback={<>Loading</>}>
      <ServiceComponent />
    </Suspense>
  );
}
