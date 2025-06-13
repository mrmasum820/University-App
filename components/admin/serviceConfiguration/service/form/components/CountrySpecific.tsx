"use client";

import { getServiceContryList } from "@/common/getDropdown";
import { Card, FormSelect, FormTextField, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ServiceSchemaType } from "../service.form.model";


const CountrySpecific = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Country/Region Specific" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<ServiceSchemaType>
                name="state"
                placeholder="State"
                label="State"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField<ServiceSchemaType>
                name="city"
                placeholder="Town/City"
                label="Town/City"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Country</InputLabel>
              <FormSelect<ServiceSchemaType>
                name="country_id"
                options={getServiceContryList()}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountrySpecific;
