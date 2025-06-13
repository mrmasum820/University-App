"use client"
import SupplierCategoryFormComponent from './form/supplierCategory.form.component';
import SupplierCategoryListComponent from './list/supplierCategory.list.component';

export default function SupplierCategoryView() {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <SupplierCategoryFormComponent/>
            </div>
            <div className='col-span-8 '>
                <SupplierCategoryListComponent/>
            </div>
        </div>
    )
}