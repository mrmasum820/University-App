"use client";

import { Button, Card, FormArray, FormSelect, FormTextField, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ApplicantSchemaType } from "../applicant.form.model";

const LegalGuardian = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Legal Guardian" />
        <Card.Body>
          <FormArray<ApplicantSchemaType> name="parents" >
            {({ fields, append, remove }) => {
              return (<>
                {fields.map((item, index) => (
                  <Grid key={item.id} className="mb-4">
                    <Grid.Col className="col-span-12 md:col-span-3">
                      <FormTextField<ApplicantSchemaType>
                        name={`parents.${index}.name`}
                        label="Full name"
                        placeholder="Full name"
                      />
                    </Grid.Col>
                    <Grid.Col className="col-span-12 md:col-span-3">
                      <FormTextField<ApplicantSchemaType>
                        name={`parents.${index}.relation`}
                        label="Relationship"
                        placeholder="Relationship"
                      />
                    </Grid.Col>
                    <Grid.Col className="col-span-12 md:col-span-3">
                      <FormTextField<ApplicantSchemaType>
                        name={`parents.${index}.occupation`}
                        label="Occupation"
                        placeholder="Occupation"
                      />
                    </Grid.Col>
                    <Grid.Col className="col-span-12 md:col-span-2">
                      <InputLabel>Income</InputLabel>
                      <FormSelect<ApplicantSchemaType>
                        name={`parents.${index}.income`}
                        placeholder="Select source"
                        options={[
                          { label: "Salary", value: "salary" },
                          { label: "Rent", value: "rent" },
                          { label: "Other", value: "other" },
                        ]}
                      />
                    </Grid.Col>
                    <Grid.Col className="col-span-12 md:col-span-1">
                      <InputLabel className="opacity-0">Actions</InputLabel>
                      <Button
                        startIcon="delete"
                        variant="outline"
                        className="h-[45px]"
                        color="danger"
                        onClick={() => remove(index)}
                      />
                    </Grid.Col>
                  </Grid>
                ))}

                <div className="mt-4">
                  <Button onClick={() => append({ name: "", relation: "", occupation: "", income: "" })} variant="outline" startIcon="plus">
                    Add More
                  </Button>
                </div>
              </>)
            }}
          </FormArray>

        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default LegalGuardian;
