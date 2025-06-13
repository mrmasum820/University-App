import {
  Card,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { MarksSchemaType } from "./marks.form.model";

export default function MarksFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<MarksSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Marks</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Mark" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* exam category */}
              <div className="mt-3">
                <InputLabel>Exam</InputLabel>
                <FormSelect
                  name="exam_category"
                  placeholder="Select Exam"
                  options={[]}
                />
              </div>
              {/* student */}
              <div className="mt-3">
                <InputLabel>Student</InputLabel>
                <FormSelect
                  name="student_category"
                  placeholder="Select Student"
                  options={[]}
                />
              </div>
              {/* teacher */}
              <div className="mt-3">
                <InputLabel>Teacher</InputLabel>
                <FormSelect
                  name="teacher_category"
                  placeholder="Select Teacher"
                  options={[]}
                />
              </div>

              {/* marks obtained */}
              <div className="mt-3">
                <FormTextField
                  name="marks_obtained"
                  label="Marks Obtained"
                  placeholder="0.01"
                />
              </div>

              {/* grade */}
              <div className="mt-3">
                <FormTextField
                  name="grade"
                  label="Grade"
                  placeholder="e.g. A"
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
