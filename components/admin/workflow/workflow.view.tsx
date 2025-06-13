"use client"
import WorkflowFormComponent from './form/workflow.form.component';
import WorkflowListComponent from './list/workflow.list.component';

export default function WorkflowView() {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
                <WorkflowFormComponent/>
            </div>
            <div className='col-span-8 '>
                <WorkflowListComponent  />
            </div>
        </div>
    )
}