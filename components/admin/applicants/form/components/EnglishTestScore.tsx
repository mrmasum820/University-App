"use client";
import { Card, FormArray, FormTextField, Grid, useFormContext } from "@/uikit/ui";
import { Button } from "@/uikit/ui/basic/button";
import { ArrayPath, FieldArrayWithId, UseFieldArrayAppend, useWatch } from "react-hook-form";
import { CiCircleCheck, CiEdit, CiTrash } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { ApplicantSchemaType } from "../applicant.form.model";



const EnglishTestScore = () => {
  const { control, form: { setValue } } = useFormContext<ApplicantSchemaType>();
  const studyBackground = useWatch({ control, name: "english_qualifications.items" }) || [];

  const setOnlyRowActive = (index: number | null) => {
    const updated = studyBackground.map((row, i: number) => ({
      ...row,
      status: i === index ? "active" : ""
    }));
    setValue("english_qualifications.items", updated);
  };

  const addRow = (append: UseFieldArrayAppend<ApplicantSchemaType, ArrayPath<ApplicantSchemaType>>) => {
    const isAnyEditing = studyBackground.some((row) => row.status === "active");
    if (isAnyEditing) setOnlyRowActive(null);
    append({
      course_name: "",
      reading_score: "",
      writing_score: "",
      speaking_score: "",
      listening_score: "",
      total_score: "",
      status: "active"
    });
  };

  const saveRow = () => {
    setOnlyRowActive(null);
  };

  const deleteRow = (index: number, remove: (index: number) => void) => remove(index);
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="English Test Score" />
        <Card.Body className="p-0">
          <FormArray<ApplicantSchemaType> name="english_qualifications.items">
            {({ fields, append, remove }) => {
              return (<>
                <table className="w-full table-auto ">
                  <thead>
                    <tr className="bg-gray-200 text-left">
                      <th className="p-4 w-[17%]">Course name</th>
                      <th className="p-4 w-[26%]">Reading score</th>
                      <th className="p-4 w-[13%]">Writing score</th>
                      <th className="p-4 w-[13%]">Speaking score</th>
                      <th className="p-4 w-[13%]">Listening score</th>
                      <th className="p-4 w-[13%]">Total score</th>
                      <th className="p-4 w-[5%] text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((item, index) => {
                      const englishItem = item as unknown as FieldArrayWithId<ApplicantSchemaType, "english_qualifications.items", "id">;
                      const isActive = englishItem.status === "active";
                      return (
                        <tr key={item.id} className="even:bg-gray-100">
                          {isActive ? (
                            <>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.course_name`} placeholder="Course name" />
                              </td>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.reading_score`} placeholder="Reading score" />
                              </td>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.writing_score`} placeholder="Writing score" />
                              </td>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.speaking_score`} placeholder="Speaking score" />
                              </td>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.listening_score`} placeholder="Listening score" />
                              </td>
                              <td className="p-4">
                                <FormTextField<ApplicantSchemaType> name={`english_qualifications.items.${index}.total_score`} placeholder="Total score" />
                              </td>
                              <td className="p-4 text-center">
                                <div className="flex gap-2 items-center justify-center">
                                  <CiCircleCheck className="size-7 bg-blue-500/30 rounded-full p-1 text-blue-600 " onClick={saveRow} />
                                  <CiTrash className="size-7 bg-red-500/30 rounded-full p-1 text-red-500 " onClick={() => deleteRow(index, remove)} />
                                </div>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="p-5">{englishItem?.course_name}</td>
                              <td className="p-5">{englishItem?.reading_score}</td>
                              <td className="p-5">{englishItem?.writing_score}</td>
                              <td className="p-5">{englishItem?.speaking_score}</td>
                              <td className="p-5">{englishItem?.listening_score}</td>
                              <td className="p-5">{englishItem?.total_score}</td>
                              <td className="p-5 text-center">
                                <div className="flex gap-2 items-center justify-center">
                                  <CiEdit className="size-7 bg-blue-500/30 rounded-full p-1 text-blue-600 " onClick={() => setOnlyRowActive(index)} />
                                  <CiTrash className="size-7 bg-red-500/30 rounded-full p-1 text-red-500 " onClick={() => deleteRow(index, remove)} />
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
                          <Button onClick={() => addRow(append)} className="mt-2 px-3 rounded py-1">
                            <FiPlus className="size-6 pr-1" /> <span>Add More</span>
                          </Button>
                        </div>
                      </td>

                    </tr>
                  </tfoot>
                </table>
              </>)
            }}
          </FormArray>

        </Card.Body>

      </Card>
    </Grid.Col>
  );
};

export default EnglishTestScore;
