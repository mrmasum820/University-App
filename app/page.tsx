"use client";
import dynamic from "next/dynamic";
import { Fragment } from "react";
const LoginComponent = dynamic(
  () => import("@/components/auth/login/login.component")
);

// export const supplierTypeSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
// });

// export type SupplierTypeSchemaType = z.infer<typeof supplierTypeSchema>;

// export const supplierTypeDefaultValues: SupplierTypeSchemaType = {
//   name: "",
// };

export default function Home() {
  // const formRef = useRef<FormRefProps<SupplierTypeSchemaType>>(null);
  // const submitRef = useRef<HTMLButtonElement>(null);
  // const triggerAbsolute = useTrigger<SupplierTypeSchemaType>();
  // const clickSubmit = () => {
  //   submitRef.current?.click();
  // };
  return (
    <Fragment>
      <LoginComponent />
      {/* <div className="w-3/5 border p-4 rounded border-gray-300 mx-auto my-4">
        <Form
          defaultValues={supplierTypeDefaultValues}
          schema={supplierTypeSchema}
          onSubmit={(values) => {
            console.log("Form submitted", values);
            alert(JSON.stringify(values));
          }}
          ref={formRef}
        >
          <Stepper
            onComplete={clickSubmit}
            stepperConfig={[
              { name: "step one" },
              { name: "step tow" },
              { name: "step three" },
              { name: "step four" },
            ]}
          >
            <Stepper.Step
              validate={() => triggerAbsolute(formRef.current?.form, ["name"])}
            >
              <div>
                <FormTextField<SupplierTypeSchemaType> name="name" />
              </div>
            </Stepper.Step>
            <Stepper.Step>Step Tow</Stepper.Step>
            <Stepper.Step>Step Three</Stepper.Step>
            <Stepper.Step>Step Four</Stepper.Step>
          </Stepper>
          <button type="submit" hidden ref={submitRef}>
            Submit
          </button>
        </Form>
      </div> */}
    </Fragment>
  );
}
