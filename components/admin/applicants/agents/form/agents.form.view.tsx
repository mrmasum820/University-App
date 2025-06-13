import { TBasicFormViewProps } from "@/common";
import { getCounselorsList } from "@/common/getDropdown";
import { Button, Card, FormSelect, FormTextField, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useParams } from "next/navigation";
import { agentsDefaultValues, AgentsSchemaType } from "./agents.form.model";
import Textarea from "@/uikit/ui/basic/Textarea";

export default function AgentsFormView({
  formRef,
}: TBasicFormViewProps<AgentsSchemaType>) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full bg-gray-100 md:pr-4">
        <Card>
          <Card.Header title={id ? "Edit New Agents" : "Add New Agents"} />
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-12">
                <InputLabel>Counselor</InputLabel>
                <FormSelect<AgentsSchemaType>
                  name="connselor_id"
                  options={getCounselorsList()}
                  placeholder="Select Counselor"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<AgentsSchemaType>
                  name="name"
                  placeholder="Full name"
                  label="Full name *"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="email"
                  placeholder="Official mail"
                  label="Official email"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="phone"
                  placeholder="Official phone"
                  label="Official phone"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="company"
                  placeholder="Person In-Charge"
                  label="Person In-Charge"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="address"
                  placeholder="Designation"
                  label="Designation"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <Textarea label="Address" rows={2} placeholder="Address" />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="city"
                  placeholder="Personal Mail"
                  label="Personal Mail"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<AgentsSchemaType>
                  name="city"
                  placeholder="Personal Phone"
                  label="Personal Phone"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <InputLabel>Status</InputLabel>
                <FormSelect<AgentsSchemaType>
                  name="status"
                  options={[
                    { label: "Active", value: "active" },
                    { label: "Deactive", value: "deactive" },
                  ]}
                  placeholder="Status"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12">
                <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
                  <Button
                    type="button"
                    onClick={() => formRef?.current?.reset(agentsDefaultValues)}
                    variant="outline"
                    color="danger"
                    startIcon="x"
                  >
                    Clear
                  </Button>
                  <Button
                    type="submit"
                    variant="outline"
                    startIcon={id ? "update" : "save"}
                    loading={formRef?.current?.form.formState.isSubmitted}
                  >
                    {id ? "Update" : "Add"}
                  </Button>
                </div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
