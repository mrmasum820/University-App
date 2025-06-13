import {
  Card,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { LecturerSchemaType } from "./lecturer.form.model";

export default function LecturerFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<LecturerSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Lecturer</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Lecturer" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Lecturer Name"
                  placeholder="Lecturer Name"
                />
              </div>
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Contact Details"
                  placeholder="Contact Details"
                />
              </div>
              {/* select program */}
              <div className="mt-3">
                <InputLabel>Select Program</InputLabel>
                <FormSelect name="course_id" placeholder="None" options={[]} />
              </div>

              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Designation"
                  placeholder="Designation"
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
