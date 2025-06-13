"use client";
import { Card, FormTextEditor, useFormContext } from "@/uikit/ui";
import { ServiceSchemaType } from "../service.form.model";



const Description = () => {
  const { form: { formState:{errors} } } = useFormContext<ServiceSchemaType>();
  console.log("errors", errors);
  
  return (
    <div className="mt-4">
      <Card>
        <Card.Body>
          <div>
            <h4 className="mb-2 font-semibold text-gray-600">Description</h4>
            <FormTextEditor<ServiceSchemaType> name="description" placeholder="Enter description" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
