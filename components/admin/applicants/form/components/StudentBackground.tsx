"use client";
import {
  Button,
  Card,
  FormArray,
  FormDateInput,
  FormTextField,
  Grid,
  useFormContext,
} from "@/uikit/ui";
import {
  ArrayPath,
  FieldArrayWithId,
  UseFieldArrayAppend,
  useWatch,
} from "react-hook-form";
import { CiCircleCheck, CiEdit, CiTrash } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { ApplicantSchemaType } from "../applicant.form.model";

const StudentBackground = () => {
  const {
    control,
    form: { setValue },
  } = useFormContext<ApplicantSchemaType>();
  const studyBackground =
    useWatch({ control, name: "study_background.items" }) || [];

  const setOnlyRowActive = (index: number | null) => {
    const updated = studyBackground.map((row, i: number) => ({
      ...row,
      status: i === index ? "active" : "",
    }));
    setValue("study_background.items", updated);
  };

  const addRow = (
    append: UseFieldArrayAppend<
      ApplicantSchemaType,
      ArrayPath<ApplicantSchemaType>
    >
  ) => {
    const isAnyEditing = studyBackground.some((row) => row.status === "active");
    if (isAnyEditing) setOnlyRowActive(null);
    append({
      degree_title: "",
      degree_level: "",
      field_of_study: "",
      institution: "",
      pass_result: "",
      start_date: new Date(),
      end_date: new Date(),
      status: "active",
    });
  };

  const saveRow = () => {
    setOnlyRowActive(null);
  };

  const deleteRow = (index: number, remove: (index: number) => void) =>
    remove(index);

  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Academic Qualifications" />
        <Card.Body className="p-0">
          <FormArray<ApplicantSchemaType> name="study_background.items">
            {({ fields, append, remove }) => {
              return (
                <>
                  <table className="w-full table-auto ">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="p-4 w-[17%]">Degree Title</th>
                        <th className="p-4 w-[13%]">Degree Level</th>
                        <th className="p-4 w-[13%]">Field of Study</th>
                        <th className="p-4 w-[13%]">Institution</th>
                        <th className="p-4 w-[13%]">Pass Result</th>
                        <th className="p-4 w-[13%]">Start Date</th>
                        <th className="p-4 w-[13%]">End Date</th>
                        <th className="p-4 w-[5%] text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fields.map((item, index) => {
                        const studyItem = item as unknown as FieldArrayWithId<
                          ApplicantSchemaType,
                          "study_background.items",
                          "id"
                        >;
                        const isActive = studyItem.status === "active";
                        return (
                          <tr key={item.id} className="even:bg-gray-100">
                            {isActive ? (
                              <>
                                <td className="p-4">
                                  <FormTextField<ApplicantSchemaType>
                                    name={`study_background.items.${index}.degree_title`}
                                    placeholder="Degree Title"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormTextField<ApplicantSchemaType>
                                    name={`study_background.items.${index}.degree_level`}
                                    placeholder="Degree Level"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormTextField<ApplicantSchemaType>
                                    name={`study_background.items.${index}.field_of_study`}
                                    placeholder="Field of Study"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormTextField<ApplicantSchemaType>
                                    name={`study_background.items.${index}.institution`}
                                    placeholder="Institution"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormTextField<ApplicantSchemaType>
                                    name={`study_background.items.${index}.pass_result`}
                                    placeholder="Pass Result"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormDateInput<ApplicantSchemaType>
                                    name={`study_background.items.${index}.start_date`}
                                    placeholder="Start ate"
                                  />
                                </td>
                                <td className="p-4">
                                  <FormDateInput<ApplicantSchemaType>
                                    name={`study_background.items.${index}.end_date`}
                                    placeholder="End Date"
                                  />
                                </td>

                                <td className="p-4 text-center">
                                  <div className="flex gap-2 items-center justify-center">
                                    <CiCircleCheck
                                      className="size-7 bg-blue-500/30 rounded-full p-1 text-blue-600 "
                                      onClick={saveRow}
                                    />
                                    <CiTrash
                                      className="size-7 bg-red-500/30 rounded-full p-1 text-red-500 "
                                      onClick={() => deleteRow(index, remove)}
                                    />
                                  </div>
                                </td>
                              </>
                            ) : (
                              <>
                                <td className="p-5">
                                  {studyItem?.degree_title}
                                </td>
                                <td className="p-5">
                                  {studyItem.degree_level}
                                </td>
                                <td className="p-5">
                                  {studyItem.field_of_study}
                                </td>
                                <td className="p-5">{studyItem.institution}</td>
                                <td className="p-5">{studyItem.pass_result}</td>
                                <td className="p-5">
                                  {studyItem.start_date &&
                                    new Date(
                                      studyItem.start_date
                                    ).toLocaleDateString()}
                                </td>
                                <td className="p-5">
                                  {studyItem.end_date &&
                                    new Date(
                                      studyItem.end_date
                                    ).toLocaleDateString()}
                                </td>
                                <td className="p-5 text-center">
                                  <div className="flex gap-2 items-center justify-center">
                                    <CiEdit
                                      className="size-7 bg-blue-500/30 rounded-full p-1 text-blue-600 "
                                      onClick={() => setOnlyRowActive(index)}
                                    />
                                    <CiTrash
                                      className="size-7 bg-red-500/30 rounded-full p-1 text-red-500 "
                                      onClick={() => deleteRow(index, remove)}
                                    />
                                  </div>
                                </td>
                              </>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={8} className="border-t border-gray-300">
                          <div className="p-2">
                            <Button
                              onClick={() => addRow(append)}
                              className="mt-2 px-3 rounded py-1"
                            >
                              <FiPlus className="size-6 pr-1" />{" "}
                              <span>Add More</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </>
              );
            }}
          </FormArray>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default StudentBackground;
