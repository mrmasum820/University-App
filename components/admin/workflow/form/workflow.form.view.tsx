"use client";
import { TBasicFormViewProps } from "@/common";
import { useEditStore } from "@/common/store";
import { cn } from "@/uikit";
import { Card, FormArray, FormTextField, OutlineButton } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { FaPlus, FaTrash, FaTrophy } from "react-icons/fa";
import {
  WorkflowSchemaType,
  workflowDefaultValues,
} from "./workflow.form.model";

export default function WorkflowFormView(
  props: TBasicFormViewProps<WorkflowSchemaType>
) {
  const { formRef } = props;
  const { isEdit, isEditReset } = useEditStore((state) => state);
  const handleStatus = (index: number) => {
    if (!formRef?.current?.form.watch(`workflow_items.${index}.status`)) {
      formRef?.current?.setValue(`workflow_items.${index}.status`, "active");
    } else {
      formRef?.current?.setValue(`workflow_items.${index}.status`, "");
    }
  };

  return (
    <div className="">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Workflow</h2>
        <p className="text-gray-400 text-sm">
          A workflow will always include the latest two stages by default.
          Select your winning stage to mark the final stage as the finish line.
        </p>
        <h2 className="font-semibold">
          {isEdit ? "Update workflow" : "Add New workflow"}
        </h2>
      </div>
      {/* add new user */}
      <div className="mt-2">
        <Card>
          <Card.Body>
            <div className="px-2 pb-4">
              <div className="mt-3">
                <FormTextField<WorkflowSchemaType>
                  name="name"
                  label="Workflow name"
                  placeholder="Workflow name"
                />
              </div>
              <InputLabel className="my-4">Workflow Stages</InputLabel>
              <FormArray<WorkflowSchemaType> name="workflow_items">
                {({ fields, append, remove }) => (
                  <div>
                    {fields?.map((filed, index) => {
                      return (
                        <div key={filed.id} className="mt-3">
                          <FormTextField<WorkflowSchemaType>
                            name={`workflow_items.${index}.name`}
                            placeholder="Your statge name here"
                            endIcon={
                              <div className="flex gap-3 items-center justify-between h-full">
                                {/* <FaCalendarAlt className="w-6 h-full  text-gray-300 hover:text-gray-700 cursor-pointer" /> */}
                                <FaTrash
                                  onClick={() => index > 1 && remove(index)}
                                  className="w-5 h-5  text-gray-300 hover:text-gray-700 cursor-pointer"
                                />
                                <FaTrophy
                                  onClick={() => handleStatus(index)}
                                  className={cn(
                                    "w-6 h-6  text-gray-300 hover:text-gray-700 cursor-pointer",
                                    !formRef?.current?.form.watch(
                                      `workflow_items.${index}.status`
                                    ) === false && "text-blue-500"
                                  )}
                                />
                              </div>
                            }
                          />
                        </div>
                      );
                    })}
                    <div className="mt-3">
                      <FormTextField<WorkflowSchemaType>
                        name="workflow_stages_input"
                        placeholder="Enter Your Stages"
                        endIcon={
                          <button
                            type="button"
                            onClick={() => {
                              const inputData = formRef?.current?.form?.watch(
                                "workflow_stages_input"
                              ) as string;
                              if (inputData !== "") {
                                append({
                                  name: inputData,
                                  status: "",
                                });
                                formRef?.current?.setValue(
                                  "workflow_stages_input",
                                  ""
                                );
                              }
                            }}
                            className="inline-flex bg-blue-500 rounded-full h-full w-7 justify-center items-center cursor-pointer"
                          >
                            <FaPlus className=" w-4 h-4 text-white " />
                          </button>
                        }
                      />
                    </div>
                  </div>
                )}
              </FormArray>
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton
            type="button"
            onClick={() =>
              isEdit
                ? isEditReset()
                : formRef?.current?.reset(workflowDefaultValues)
            }
          >
            Clear
          </OutlineButton>
          <OutlineButton type="submit">
            {isEdit ? "Update" : "Add"}
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}
