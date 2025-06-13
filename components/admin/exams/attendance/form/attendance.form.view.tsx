import {
  Card,
  FormDateInput,
  FormSelect,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { ExamAttendanceSchemaType } from "./attendance.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";

export default function AttendanceFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ExamAttendanceSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Attendance</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Attendance" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* batch category */}
              <div className="mt-3">
                <InputLabel>Batch</InputLabel>
                <FormSelect
                  name="batch_category"
                  placeholder="Select Class"
                  options={[]}
                />
              </div>

              {/* course category */}
              <div className="mt-3">
                <InputLabel>Course</InputLabel>
                <FormSelect
                  name="course_category"
                  placeholder="Select Section"
                  options={[]}
                />
              </div>

              {/* attendance date */}
              <div className="mt-3">
                <FormDateInput name="date" label="Attendance Date" />
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
