"use client";

import { getServiceFeesList } from "@/common/getDropdown";
import {
  Button,
  Card,
  FormArray,
  FormSelect,
  FormTextField,
  Grid,
  useFormContext,
} from "@/uikit/ui";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { FaTrash } from "react-icons/fa";
import { ServiceSchemaType } from "../service.form.model";

const Fees = () => {
  const {
    form: { setValue },
    control,
  } = useFormContext<ServiceSchemaType>();
  const getServiceFeesLists = getServiceFeesList();
  const fees = useWatch({ control, name: "fees" });
  useEffect(() => {
    if (!fees) return;

    fees.forEach((fee, index) => {
      const amount = Number(fee?.amount) || 0;
      const discount = Number(fee?.discount) || 0;
      const calculatedSubTotal = amount - discount;
      if (fee?.sub_total !== calculatedSubTotal && !isNaN(calculatedSubTotal)) {
        setValue(`fees.${index}.sub_total`, calculatedSubTotal);
      }
    });
  }, [fees, setValue]);

  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Fees" />
        <Card.Body>
          <FormArray<ServiceSchemaType> name="fees">
            {({ fields, append, remove }) => {
              return (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md">
                      <thead className="bg-white border-b border-gray-200 p-4">
                        <tr>
                          <th className="px-4 py-2 text-gray-500 text-left w-[15%] ">
                            Name
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[20%] ">
                            Charge Type
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[10%] ">
                            Amount
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[10%] ">
                            Discount
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[10%] ">
                            Total
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[20%] ">
                            Description
                          </th>
                          <th className="px-4 py-2 text-gray-500 text-left w-[5%] "></th>
                        </tr>
                      </thead>
                      <tbody>
                        {fields?.map((filed, index) => {
                          return (
                            <tr
                              key={filed.id}
                              className="cursor-pointer transition-all odd:bg-gray-100 "
                            >
                              <td className="py-1 px-1">
                                <FormTextField<ServiceSchemaType>
                                  name={`fees.${index}.name`}
                                  placeholder="Title"
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1">
                                <FormSelect<ServiceSchemaType>
                                  name={`fees.${index}.fee_type_id`}
                                  options={getServiceFeesLists}
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1">
                                <FormTextField<ServiceSchemaType>
                                  name={`fees.${index}.amount`}
                                  placeholder="Enter Amount"
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1">
                                <FormTextField<ServiceSchemaType>
                                  name={`fees.${index}.discount`}
                                  placeholder="Discount"
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1">
                                <FormTextField<ServiceSchemaType>
                                  name={`fees.${index}.sub_total`}
                                  placeholder="SubTotal"
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1">
                                <FormTextField<ServiceSchemaType>
                                  name={`fees.${index}.description`}
                                  placeholder="Description"
                                  className="bg-white"
                                />
                              </td>
                              <td className="py-1 px-1 w-[5%]">
                                <Button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="flex justify-center items-center w-full"
                                >
                                  <FaTrash className="w-5 h-5 text-red-600" />
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <Grid>
                    <Grid.Col className="col-span-12 md:col-span-2">
                      <div className="mt-2">
                        <Button
                          type="button"
                          className="w-full rounded"
                          onClick={() =>
                            append({
                              name: "",
                              fee_type_id: null,
                              amount: null,
                              description: "",
                              discount: null,
                              sub_total: null,
                            })
                          }
                        >
                          Add
                        </Button>
                      </div>
                    </Grid.Col>
                  </Grid>
                </>
              );
            }}
          </FormArray>

          {/* <Button
            variant="default"
            className="w-full border-2 border-dashed py-2 border-gray-300 text-gray-500 mt-4"
          >
            + Add New Fee
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Fees;
