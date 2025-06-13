import {
  Card,
  FormDateInput,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { ExamScheduleSchemaType } from "./schedule.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";

export default function ScheduleFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ExamScheduleSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Schedule</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Schedule" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* day of week */}
              <div className="mt-3">
                <InputLabel>Day of Week</InputLabel>
                <FormSelect
                  name="day_of_week"
                  placeholder="Select Day"
                  options={[]}
                />
              </div>

              {/* exam */}
              <div className="mt-3">
                <InputLabel>Exam</InputLabel>
                <FormSelect
                  name="exam"
                  placeholder="Select Exam"
                  options={[]}
                />
              </div>

              {/* classroom */}
              <div className="mt-3">
                <InputLabel>Classroom</InputLabel>
                <FormSelect
                  name="classroom"
                  placeholder="Select Classroom"
                  options={[]}
                />
              </div>

              {/* exam date and time */}
              <div className="mt-3">
                <FormDateInput
                  name="exam_date_and_time"
                  label="Date and Time"
                />
              </div>

              {/* exam duration */}
              <div className="mt-3">
                <FormTextField
                  name="exam_duration"
                  label="Duration"
                  placeholder="0"
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
