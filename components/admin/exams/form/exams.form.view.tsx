import {
  Card,
  FormDateInput,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ExamsSchemaType } from "./exams.form.model";
import Textarea from "@/uikit/ui/basic/Textarea";

export default function ExamsFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ExamsSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Exams</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Exams" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Exam Name"
                  placeholder="Exam Name"
                />
              </div>
              {/* exam category */}
              <div className="mt-3">
                <InputLabel>Exam Type</InputLabel>
                <FormSelect
                  name="exam_category"
                  placeholder="Select"
                  options={[]}
                />
              </div>
              {/* description textarea */}
              <div className="mt-3">
                <Textarea label="Description" rows={3} />
              </div>
              {/* exam date */}
              <div className="mt-3">
                <FormDateInput
                  name="slug"
                  label="Time Limit"
                  placeholder="e.g., 9-12 PM"
                />
              </div>
              {/* start time and end time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-3">
                  <FormDateInput
                    name="slug"
                    label="Exam Start Date"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="mt-3">
                  <FormDateInput
                    name="slug"
                    label="Exam End Date"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* pass marks */}
                <div className="mt-3">
                  <FormTextField
                    name="slug"
                    label="Pass Marks"
                    placeholder="Pass Marks"
                  />
                </div>
                {/* total marks */}
                <div className="mt-3">
                  <FormTextField
                    name="slug"
                    label="Total Marks"
                    placeholder="Total Marks"
                  />
                </div>
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
