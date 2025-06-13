import dynamic from "next/dynamic"
import { Suspense } from "react"

const SupplierListComponent = dynamic(()=> import("@/components/admin/supplier/list/supplier.list.component"))

export default function Suppliers() {
  return (
   <Suspense fallback={<></>}>
    <SupplierListComponent/>
   </Suspense>
  )
}