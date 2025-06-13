"use client";

import { getWorkflowList } from "@/common/getDropdown";
import {
  Card,
  FormCheckbox,
  FormDateInput,
  FormSelect,
  FormTextEditor,
  Grid,
  OutlineButton,
  useFormContext
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ServiceSchemaType } from "../service.form.model";

const RightSide = () => {
  
  const {form: { watch } } = useFormContext();
  const getWorkflowLists = getWorkflowList();
  const workflowId = watch("workflow.workflow_id");
  const workflowItems = getWorkflowLists.find((val) => val.value === workflowId)?.items;

  return (
    <div>
      <Card>
        <Card.Header title="Publish">
          <OutlineButton
            type="submit"
            className="bg-blue-500 px-8 text-white border-none outline-0 hover:bg-blue-700"
          >
            Publish
          </OutlineButton>
        </Card.Header>
        <Card.Body>
          <div className="my-4 mx-2">
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-6">
                <OutlineButton variant="outline">Save Draft</OutlineButton>
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <OutlineButton variant="danger">Cancel</OutlineButton>
              </Grid.Col>
              <Grid.Col>
                <FormDateInput<ServiceSchemaType>
                  name="date"
                  label="Select Date"
                />
              </Grid.Col>
              <Grid.Col>
                <InputLabel>Publish By</InputLabel>
                <FormSelect<ServiceSchemaType>
                  name="create_by"
                  options={[
                    { value: 1, label: "Shishir" },
                    { value: 2, label: "Rayhan" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col>
                <InputLabel>Status</InputLabel>
                <FormSelect<ServiceSchemaType>
                  name="status"
                  options={[
                    { value: "Active", label: "Active" },
                    { value: "Deactive", label: "Deactive" },
                  ]}
                />
              </Grid.Col>
            </Grid>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header title="Short Description" />
        <Card.Body>
          <FormTextEditor<ServiceSchemaType> name="sort_description" />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header title="Workflow" />
        <Card.Body>
          <Grid>
            <Grid.Col>
              <InputLabel>Workflow name</InputLabel>
              <FormSelect<ServiceSchemaType>
                name="workflow.workflow_id"
                options={getWorkflowLists}
              />
            </Grid.Col>
            {Array.isArray(workflowItems?.workflow_items) &&
              workflowItems?.workflow_items?.map(
                (item: { name: string; id: number }, index: number) => {
                  return (
                    <Grid.Col key={index}>
                      <FormCheckbox<ServiceSchemaType>
                        name={`workflow.workflow_items.${index}.workflow_item_id`}
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

export default RightSide;
