import {
  Card,
  FormRadio,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { SubjectSchemaType } from "./subject.form.model";

export default function SubjectFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<SubjectSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      {/* add new subject */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Subject</h2>
        <Card>
          <Card.Header title="Add Subject" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Subject Name"
                  placeholder="Subject Name"
                />
              </div>

              <div className="mt-3">
                {/* <InputLabel>Gender</InputLabel> */}
                <FormRadio
                  name=""
                  options={[
                    { label: "Theory", value: "theory" },
                    { label: "Practical", value: "practical" },
                  ]}
                />
              </div>

              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Subject Code"
                  placeholder="Subject Code"
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
