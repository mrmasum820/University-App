import { Suspense } from "react";
import dynamic from "next/dynamic";

const SupplierComponent = dynamic(
  () => import("@/components/admin/supplier/supplier.component")
);
export default function Suppliers() {
  return (
    <Suspense fallback={null}>
      <SupplierComponent />
    </Suspense>
  );
}
