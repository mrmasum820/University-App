import {
  Card,
  FormDateInput,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { EnrollmentSchemaType } from "./enrollment.form.model";

export default function EnrollmentFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<EnrollmentSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Enrollment</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Enrollment" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Student Name/Student ID"
                  placeholder="Student Name/Student ID"
                />
              </div>
              {/* select course */}
              <div className="mt-3">
                <InputLabel>Select Course</InputLabel>
                <FormSelect name="course_id" placeholder="None" options={[]} />
              </div>
              {/* select batch */}
              <div className="mt-3">
                <InputLabel>Select Batch</InputLabel>
                <FormSelect name="batch_id" placeholder="None" options={[]} />
              </div>

              {/* enrollment date */}
              <div className="mt-3">
                <FormDateInput
                  name="slug"
                  label="Enrollment Date"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              {/* status */}
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
