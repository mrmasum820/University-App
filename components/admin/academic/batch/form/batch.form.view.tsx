import {
  Card,
  FormDateInput,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { BatchSchemaType } from "./batch.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";

export default function BatchFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<BatchSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Batch</h2>

      <div className="mt-9">
        <Card>
          <Card.Header title="Add Batch" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField
                  name="title"
                  label="Batch Name"
                  placeholder="Batch Name"
                />
              </div>
              {/* select program */}
              <div className="mt-3">
                <InputLabel>Select Program</InputLabel>
                <FormSelect name="program_id" placeholder="None" options={[]} />
              </div>
              {/* select lecturer */}
              <div className="mt-3">
                <InputLabel>Select Lecturer</InputLabel>
                <FormSelect
                  name="lecturer_id"
                  placeholder="None"
                  options={[]}
                />
              </div>
              {/* select classroom */}
              <div className="mt-3">
                <InputLabel>Select Classroom</InputLabel>
                <FormSelect
                  name="classroom_id"
                  placeholder="None"
                  options={[]}
                />
              </div>

              {/* batch id */}
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Batch Id"
                  placeholder="Batch Id"
                />
              </div>
              {/* maxium number of students */}
              <div className="mt-3">
                <FormTextField
                  name="slug"
                  label="Maximum Number Of Students"
                  placeholder="e.g., 100"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="mt-3">
                  <FormDateInput
                    name="slug"
                    label="Batch Start Date"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="mt-3">
                  <FormDateInput
                    name="slug"
                    label="Batch End Date"
                    placeholder="YYYY-MM-DD"
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
