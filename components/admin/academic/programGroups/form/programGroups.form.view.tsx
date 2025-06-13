import {
  Card,
  FormSelect,
  FormTextField,
  OutlineButton,
  useFormContext,
} from "@/uikit/ui";
import { ProgramGroupsSchemaType } from "./programGroups.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import SingleCheckbox from "@/uikit/ui/basic/SingleCheckbox";

export default function ProgramGroupsFromView() {
  const {
    form: {
      formState: {},
    },
  } = useFormContext<ProgramGroupsSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  // console.log(errors);

  return (
    <div>
      {/* add new program */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Program Group</h2>
        <Card>
          <Card.Header title="Add Subject Group" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* name */}
              <div className="mt-3">
                <FormTextField name="title" label="Name" placeholder="Name" />
              </div>
              {/* classroom */}
              <div className="mt-3">
                <InputLabel>Classroom</InputLabel>
                <FormSelect
                  name="Classroom"
                  placeholder="Select"
                  options={[]}
                />
                {/* <FormTextField
                  name="slug"
                  label="Classroom"
                  placeholder="Classroom"
                /> */}
              </div>
              <div className="mt-3">
                <InputLabel>Batch</InputLabel>
                <FormSelect name="Batch" placeholder="Select" options={[]} />
              </div>
              <div className="mt-3">
                <InputLabel>Subject</InputLabel>
                <SingleCheckbox
                  label="English"
                  value="true"
                  checked={false}
                  onChange={() => {}}
                />
                <div className="my-2">
                  <SingleCheckbox
                    label="Bangla"
                    value="true"
                    checked={false}
                    onChange={() => {}}
                  />
                </div>
                <SingleCheckbox
                  label="Mathematics"
                  value="true"
                  checked={false}
                  onChange={() => {}}
                />
                <div className="my-2">
                  <SingleCheckbox
                    label="Science"
                    value="true"
                    checked={false}
                    onChange={() => {}}
                  />
                </div>
                <SingleCheckbox
                  label="Computer"
                  value="true"
                  checked={false}
                  onChange={() => {}}
                />
                {/* <FormTextField
                  name="subject"
                  label="Subject"
                  placeholder="Subject"
                /> */}
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
