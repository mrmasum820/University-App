import {
  Card,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { ProgramsSchemaType } from "./program.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";

export default function ProgramsFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ProgramsSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      {/* add new program */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Program</h2>
        <Card>
          <Card.Header title="Add Program" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Program Name"
                  placeholder="Program Name"
                />
              </div>
              {/* duration */}
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Program Duration"
                  placeholder="Program Duration"
                />
              </div>
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Program Code"
                  placeholder="Program Code"
                />
              </div>
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Number Of Subject"
                  placeholder="Number Of Subject"
                />
              </div>
              <div className="mt-3">
                <InputLabel>Status</InputLabel>
                <FormSelect
                  name=""
                  placeholder="Status"
                  options={[
                    { value: "active", label: "Active" },
                    { value: "deactive", label: "Deactive" },
                  ]}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton type="button" onClick={() => {}}>
            Clear
          </OutlineButton>
          <OutlineButton type="submit">Add</OutlineButton>
        </div>
      </div>
    </div>
  );
}
