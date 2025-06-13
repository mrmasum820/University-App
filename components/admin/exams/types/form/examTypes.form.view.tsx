import { Card, FormTextField, OutlineButton, useFormContext } from "@/uikit/ui";
import { ExamTypesSchemaType } from "./examTypes.form.model";

export default function ExamTypesFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ExamTypesSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Exam Types</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Exam Type" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Exam Type Name"
                  placeholder="Exam Type Name"
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
