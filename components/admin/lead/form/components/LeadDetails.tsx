"use client";
import { getServiceList } from "@/common/getDropdown";
import { Card, FormRadio, FormSelect, FormTextField, FormToggle, Grid, useFormContext } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useEffect } from "react";
import { LeadSchemaType } from "../lead.form.model";
const LeadDetails = () => {
  const { form: { watch, setValue } } = useFormContext();
  const getServiceLists = getServiceList();
  const getServiceFees = getServiceLists.find(item => item.value === watch("lead_progress.service_id"))?.items

  
  useEffect(() => {
    setValue('lead_payment.fee_items', getServiceFees?.fees)
  }, [getServiceFees, setValue])
  
  return (
    <div className="mt-2">
      <Card>
        <Card.Header title="Lead Process" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Service</InputLabel>
              <FormSelect<LeadSchemaType> name="lead_progress.service_id" options={getServiceLists} placeholder="Select service" />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.first_name" label="First name" placeholder="Enter first name"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.last_name" label="Last name" placeholder="Enter last name"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.email" label="Email" placeholder="Enter email address"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.contract_number" label="Contact number" placeholder="Enter contact address"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.passport" label="NRIC/Passport no." placeholder="Enter passport number"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.nationality" label="Nationality" placeholder="Enter nationality"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.country" label="Country" placeholder="Enter country"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
                <FormToggle<LeadSchemaType> name="lead_progress.contract_prefernace" label="Contract preference" />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.prefferred_lavel" label="Preferred level" placeholder="Enter preferred level"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<LeadSchemaType> name="lead_progress.study_destination" label="Study destination" placeholder="Enter study destination"/>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Gender</InputLabel>
              <FormRadio<LeadSchemaType> name="lead_progress.gender" options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Others", value: "others" },
              ]} />
            </Grid.Col>
          </Grid>

        </Card.Body>
      </Card>
    </div>
  );
};

export default LeadDetails;
