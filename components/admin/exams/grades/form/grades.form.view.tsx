import { Card, FormTextField, OutlineButton, useFormContext } from "@/uikit/ui";
import { GradesSchemaType } from "./grades.form.model";

export default function GradesFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<GradesSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Grades</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Grade" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* exam category */}
              {/* <div className="mt-3">
                <InputLabel>Exam</InputLabel>
                <FormSelect
                  name="exam_category"
                  placeholder="Select Exam"
                  options={[]}
                />
              </div> */}

              {/* minimum marks */}
              <div className="mt-3">
                <FormTextField
                  name="minimum_marks"
                  label="Minimum Marks"
                  placeholder="e.g. 70"
                />
              </div>

              {/* maximum marks */}
              <div className="mt-3">
                <FormTextField
                  name="maximum_marks"
                  label="Maximum Marks"
                  placeholder="e.g. 100"
                />
              </div>

              {/* grade */}
              <div className="mt-3">
                <FormTextField
                  name="grade"
                  label="Grade"
                  placeholder="e.g. A+"
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
