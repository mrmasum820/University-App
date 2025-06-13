"use client";
import { getWorkflowList } from "@/common/getDropdown";
import { Card, FormSelect, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ServiceSchemaType } from "../service.form.model";



const Workflow = () => {
  // const workflowId = watch("workflow.workflow_id");
  // const { data, isLoading, isSuccess } = useQuery<WorkflowEntity>({
  //   queryKey: [WorkflowQueryKey.AllItem],
  //   queryFn: workflowsAllItem,
  //   enabled: workflowId == null ? false : true,
  // });
  // const workflowDropdownValue = [...(data?.workflow_items || [])];
  console.log(getWorkflowList() || []);

  return (
    <Card className="mt-4">
      <Card.Header title="Workflow" />
      <Card.Body>
        <Grid>
          <Grid.Col>
            <InputLabel>Workflow name</InputLabel>
            <FormSelect<ServiceSchemaType>
              name="workflow.workflow_id"
              options={getWorkflowList() || []}
            />
          </Grid.Col>
          {/* {isLoading ? (
            <>Loading...</>
          ) : (
            isSuccess && (
              <>
                {workflowDropdownValue?.map((item, index) => (
                  <Grid.Col key={index}>
                    <FormCheckbox<ServiceSchemaType>
                      name={`workflow.workflow_items.${index}.workflow_item_id`}
                      id={`workflow-${item.id}`}
                      label={item.name}
                      value={item.id}
                    />
                  </Grid.Col>
                ))}
              </>
            )
          )} */}
        </Grid>
      </Card.Body>
    </Card>
  );
};

export default Workflow;
