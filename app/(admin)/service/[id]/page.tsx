"use client";
const ServiceFormComponent = dynamic(
  () =>
    import(
      "@/components/admin/serviceConfiguration/service/form/service.form.component"
    ), {ssr:false}
);
import dynamic from "next/dynamic";
import { Suspense } from "react";


export default function ServiceEdit() {
  return (
        <Suspense fallback={<></>}>
          <ServiceFormComponent />
        </Suspense>
  )
}