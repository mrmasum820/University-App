import dynamic from "next/dynamic";
import { Suspense } from "react";

const SupplierCategoryComponent = dynamic(
  () =>
    import(
      "@/components/admin/supplier/supplierCategory/supplierCategory.component"
    )
);

export default function SupplierCategory() {
  return (
    <Suspense fallback={<></>}>
      <SupplierCategoryComponent />
    </Suspense>
  );
}
