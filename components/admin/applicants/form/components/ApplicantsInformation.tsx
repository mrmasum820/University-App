"use client";

import {
  Card,
  FormDateInput,
  FormRadio,
  FormSelect,
  FormTextField,
  FormToggle,
  Grid,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import FormProfileUpload from "@/uikit/ui/form/FormProfileUpload";
import { ApplicantSchemaType } from "../applicant.form.model";
import Textarea from "@/uikit/ui/basic/Textarea";

const ApplicantsInformation = () => {
  return (
    <>
      <Grid.Col className="col-span-12">
        <Card>
          <Card.Header title="Applicants Information" />
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-9">
                <Grid>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <FormTextField<ApplicantSchemaType>
                      name="information.first_name"
                      label="Full Name"
                      placeholder="Full Name"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <FormTextField<ApplicantSchemaType>
                      name="information.passport"
                      label="NRIC/Passport no."
                      placeholder="Passport no."
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <InputLabel>Nationality</InputLabel>
                    <FormSelect<ApplicantSchemaType>
                      name="information.country"
                      placeholder="Select Nationality"
                      options={[]}
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <FormTextField<ApplicantSchemaType>
                      name="information.passport"
                      label="Race"
                      placeholder="Race"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <FormDateInput<ApplicantSchemaType>
                      name="applicant_complete.admission_date"
                      label="Date of Birth"
                      placeholder="Date of Birth"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <FormTextField<ApplicantSchemaType>
                      name="information.first_name"
                      label="Religion"
                      placeholder="Religion"
                    />
                  </Grid.Col>

                  <Grid.Col className="col-span-12 md:col-span-6">
                    <InputLabel>Gender</InputLabel>
                    <FormRadio<ApplicantSchemaType>
                      name="applicant_complete.made_of_study"
                      options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Others", value: "others" },
                      ]}
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-6">
                    <InputLabel>Marital Status</InputLabel>
                    <FormRadio<ApplicantSchemaType>
                      name="applicant_complete.made_of_study"
                      options={[
                        { label: "Single", value: "single" },
                        { label: "Married", value: "married" },
                        { label: "Divorced", value: "divorced" },
                      ]}
                    />
                  </Grid.Col>

                  <Grid.Col className="col-span-12 md:col-span-4">
                    <FormTextField<ApplicantSchemaType>
                      name="emergency_contact.contract_number"
                      label="Contact number"
                      placeholder="Contact number"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-4">
                    <FormTextField<ApplicantSchemaType>
                      name="emergency_contact.email"
                      label="Email"
                      placeholder="Email"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-4">
                    <FormToggle<ApplicantSchemaType>
                      name="emergency_contact.contract_prefernace"
                      label="Contact preference"
                    />
                  </Grid.Col>

                  <Grid.Col className="col-span-12 md:col-span-4">
                    <FormTextField<ApplicantSchemaType>
                      name="information.first_name"
                      label="City"
                      placeholder="City"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-4">
                    <InputLabel>Country</InputLabel>
                    <FormSelect<ApplicantSchemaType>
                      name="information.country"
                      placeholder="Select Country"
                      options={[]}
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-4">
                    <FormTextField<ApplicantSchemaType>
                      name="information.first_name"
                      label="Zip/Postcode"
                      placeholder="Zip/Postcode"
                    />
                  </Grid.Col>
                  <Grid.Col className="col-span-12 md:col-span-12">
                    {/* <FormTextField
                      name=""
                      label="Address"
                      placeholder="Address"
                    /> */}
                    <Textarea label="Address" rows={3} placeholder="Address" />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-3">
                <FormProfileUpload<ApplicantSchemaType> name="applicant_complete.image" />
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </Grid.Col>
    </>
  );
};

export default ApplicantsInformation;
