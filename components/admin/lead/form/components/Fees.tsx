"use client";

import { getServiceFeesList } from "@/common/getDropdown";
import {
  Button,
  Card,
  FormArray,
  FormSelect,
  FormTextField,
  useFormContext,
} from "@/uikit/ui";
import { useEffect, useMemo } from "react";
import { FieldArrayWithId, useWatch } from "react-hook-form";
import { CiCircleCheck, CiEdit, CiTrash } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { FeeItemsType, LeadSchemaType } from "../lead.form.model";

const Fees = () => {
  const {
    form: { setValue },
    control,
  } = useFormContext<LeadSchemaType>();

  const getServiceFeesLists = getServiceFeesList();
  const fees: FeeItemsType[] = useWatch({
    control,
    name: "lead_payment.fee_items",
  });
  const memoizedFees = useMemo(() => fees || [], [fees]);
  const rawPaid = useWatch({ control, name: "lead_payment.paid" });
  const paidAmount = Number(rawPaid) || 0;

  const setOnlyRowActive = (index: number | null) => {
    const updated = memoizedFees.map((row, i: number) => ({
      ...row,
      status: i === index ? "active" : "",
    }));
    setValue("lead_payment.fee_items", updated);
  };

  const addRow = (append: (value: FeeItemsType) => void) => {
    const isAnyEditing = memoizedFees.some(
      (row: FeeItemsType) => row.status === "active"
    );
    if (isAnyEditing) setOnlyRowActive(null);
    append({
      title: "",
      fee_type_id: 0,
      amount: 0,
      discount: 0,
      sub_total: 0,
      status: "active",
    });
  };

  const saveRow = () => {
    setOnlyRowActive(null);
  };

  const deleteRow = (index: number, remove: (index: number) => void) =>
    remove(index);

  const totals = useMemo(() => {
    const subTotal = memoizedFees?.reduce(
      (sum, fee) => sum + Number(fee.amount || 0),
      0
    );
    const discount = memoizedFees?.reduce(
      (sum, fee) => sum + Number(fee.discount || 0),
      0
    );
    const vat = (subTotal - discount) * 0.1;
    const totalAmount = subTotal - discount + vat;
    const dueAmount = totalAmount - paidAmount;

    return { subTotal, discount, vat, totalAmount, paidAmount, dueAmount };
  }, [memoizedFees, paidAmount]);

  useEffect(() => {
    setValue("lead_payment.sub_total", totals.subTotal);
    setValue("lead_payment.discount", totals.discount);
    setValue("lead_payment.vat", totals.vat);
    setValue("lead_payment.total", totals.totalAmount);
    setValue("lead_payment.due", totals.dueAmount);
  }, [totals, setValue]);
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Fees" />
        <Card.Body>
          <FormArray<LeadSchemaType> name="lead_payment.fee_items">
            {({ fields, append, remove }) => {
              return (
                <>
                  <table className="w-full table-auto ">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="p-4 w-[19%] border-b border-l border-gray-300">
                          Title
                        </th>
                        <th className="p-4 w-[19%] border-b border-gray-300">
                          Fee Type
                        </th>
                        <th className="p-4 w-[19%] border-b border-gray-300">
                          Fee Amount
                        </th>
                        <th className="p-4 w-[19%] border-b border-gray-300">
                          Discount
                        </th>
                        <th className="p-4 w-[19%] border-b border-gray-300">
                          Total Amount
                        </th>
                        <th className="p-4 w-[5%] border-b border-r border-gray-300 text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fields.map((item, index: number) => {
                        const fee = item as unknown as FieldArrayWithId<
                          LeadSchemaType,
                          "lead_payment.fee_items",
                          "id"
                        >;
                        const isActive = fee.status === "active";
                        const subtotal =
                          Number(fee.amount || 0) - Number(fee.discount || 0);

                        return (
                          <tr key={item.id} className="even:bg-gray-100">
                            {isActive ? (
                              <>
                                <td className="border-b border-l border-gray-300 p-4">
                                  <FormTextField<LeadSchemaType>
                                    name={`lead_payment.fee_items.${index}.title`}
                                    placeholder="Enter title"
                                  />
                                </td>
                                <td className="border-b border-gray-300 p-4 w-[20%]">
                                  <FormSelect<LeadSchemaType>
                                    name={`lead_payment.fee_items.${index}.fee_type_id`}
                                    options={getServiceFeesLists}
                                    placeholder="Select Fee Type"
                                  />
                                </td>
                                <td className="border-b border-gray-300 p-4">
                                  <FormTextField<LeadSchemaType>
                                    name={`lead_payment.fee_items.${index}.amount`}
                                    type="number"
                                    placeholder="Enter Amount"
                                  />
                                </td>
                                <td className="border-b border-gray-300 p-4">
                                  <FormTextField<LeadSchemaType>
                                    name={`lead_payment.fee_items.${index}.discount`}
                                    type="number"
                                    placeholder="Enter Discount"
                                  />
                                </td>
                                <td className="border-b border-gray-300 p-4">
                                  <FormTextField<LeadSchemaType>
                                    name={`lead_payment.fee_items.${index}.sub_total`}
                                    value={subtotal.toFixed(2)}
                                    disabled
                                    placeholder="Sub Total"
                                  />
                                </td>
                                <td className="border-b border-r border-gray-300 p-4 text-center">
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
                                <td className="border-b border-l border-gray-300 p-5">
                                  {fee.title}
                                </td>
                                <td className="border-b border-gray-300 p-5">
                                  {fee.fee_type_id &&
                                    getServiceFeesLists[fee.fee_type_id]?.label}
                                </td>
                                <td className="border-b border-gray-300 p-5">
                                  {fee.amount}
                                </td>
                                <td className="border-b border-gray-300 p-5">
                                  {fee.discount}
                                </td>
                                <td className="border-b border-gray-300 p-5">
                                  {(
                                    Number(fee.amount || 0) -
                                    Number(fee.discount || 0)
                                  ).toFixed(2)}
                                </td>
                                <td className="border-b border-r border-gray-300 p-5 text-center">
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
                        <td colSpan={3}>
                          <Button
                            onClick={() => addRow(append)}
                            className="mt-2 px-3 rounded py-1"
                          >
                            <FiPlus className="size-6 pr-1" />{" "}
                            <span>Add More</span>
                          </Button>
                        </td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          SubTotal
                        </td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          <FormTextField<LeadSchemaType>
                            className="border-0 "
                            name="lead_payment.sub_total"
                            type="number"
                            value={totals.subTotal.toFixed(2)}
                            placeholder="Sub Total"
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          Discount
                        </td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300 ">
                          <FormTextField<LeadSchemaType>
                            className="border-0"
                            name="lead_payment.discount"
                            type="number"
                            value={totals.discount.toFixed(2)}
                            placeholder="Discount"
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          VAT
                        </td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          <FormTextField<LeadSchemaType>
                            className="border-0"
                            name="lead_payment.vat"
                            type="number"
                            value={totals.vat.toFixed(2)}
                            placeholder="VAT"
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          Total Amount
                        </td>
                        <td className="bg-gray-100 px-2 py-1 border-b border-gray-300">
                          <FormTextField<LeadSchemaType>
                            className="border-0"
                            name="lead_payment.total"
                            type="number"
                            value={totals.totalAmount.toFixed(2)}
                            placeholder="Total Amount"
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          Payment Method
                        </td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          <FormSelect<LeadSchemaType>
                            name="lead_payment.payment_method"
                            placeholder="Select Payment Method"
                            options={[
                              { label: "Cash", value: "cash" },
                              { label: "Card", value: "card" },
                              { label: "Online", value: "online" },
                            ]}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          Paid Amount
                        </td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          <FormTextField<LeadSchemaType>
                            name="lead_payment.paid"
                            type="number"
                            placeholder="Enter Paid Amount"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          Due Amount
                        </td>
                        <td className="bg-gray-100 px-2 py-3 border-b border-gray-300">
                          <FormTextField<LeadSchemaType>
                            className="border-0"
                            name="lead_payment.due"
                            type="number"
                            value={totals.dueAmount.toFixed(2)}
                            placeholder="Due Amount"
                            disabled
                          />
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
    </div>
  );
};

export default Fees;
