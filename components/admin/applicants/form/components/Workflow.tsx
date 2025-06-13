"use client";
import { getWorkflowList } from "@/common/getDropdown";
import { Card, FormCheckbox, FormSelect, Grid, useFormContext } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ApplicantSchemaType } from "../applicant.form.model";


const Workflow = () => {
  const { form: { watch } } = useFormContext();
  const getWorkflowLists = getWorkflowList();
  const workflowId = watch("lead_complete.workflow.workflow_id");
  const workflowItems = getWorkflowLists.find((val) => val.value === workflowId)?.items;
  return (
    <div className="mt-4">
      <Card >
        <Card.Header title="Workflow" />
        <Card.Body> 
          <Grid>
            <Grid.Col>
              <InputLabel>Workflow name</InputLabel>
              <FormSelect<ApplicantSchemaType> name="lead_complete.workflow.workflow_id" placeholder="Workflow" options={getWorkflowLists} />
            </Grid.Col>
            {Array.isArray(workflowItems?.workflow_items) &&
              workflowItems?.workflow_items?.map(
                (item: { name: string; id: number }, index: number) => {
                  return (
                    <Grid.Col key={index}>
                      <FormCheckbox<ApplicantSchemaType>
                        name={`lead_complete.workflow.workflow_items.${index}.workflow_item_id`}
                        id={`workflow-${item.id}`}
                        label={item.name}
                        value={item.id}
                      />
                    </Grid.Col>
                  );
                }
              )}
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Workflow;
