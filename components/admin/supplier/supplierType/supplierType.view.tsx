"use client"
import SupplierTypeFormComponent from './form/supplierType.form.component';
import SupplierTypeListComponent from './list/supplierType.list.component';

export default function SupplierTypeView() {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <SupplierTypeFormComponent/>
            </div>
            <div className='col-span-8 '>
                <SupplierTypeListComponent  />
            </div>
        </div>
    )
}