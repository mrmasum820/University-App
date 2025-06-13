import dynamic from "next/dynamic";
import { Suspense } from "react";

const SupplierFormComponent = dynamic(
  () =>
    import("@/components/admin/supplier/form/supplier.form.component")
);
export default function SupplierEdit() {
  return (
    <Suspense fallback={null}>
      <SupplierFormComponent />
    </Suspense>
  );
}
