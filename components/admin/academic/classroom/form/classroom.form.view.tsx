import {
  Card,
  FormDateInput,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { ClassroomSchemaType } from "./classroom.form.model";

export default function ClassroomFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ClassroomSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      {/* add new program */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Classroom</h2>
        <Card>
          <Card.Header title="Add Class" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField name="title" label="Name" placeholder="Name" />
              </div>
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Category"
                  placeholder="Category"
                />
              </div>
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Capacity"
                  placeholder="Capacity"
                />
              </div>
              {/* duration */}
              <div className="mt-3">
                <FormDateInput
                  name="slug"
                  label="Class Time Duration"
                  placeholder="Days per Week and Time"
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
