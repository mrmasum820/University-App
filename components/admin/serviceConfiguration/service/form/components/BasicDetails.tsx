"use client";
import { ServiceCategoryEntity } from "@/common";
import { serviceCategoryList, ServiceCategoryQueryKey } from "@/common/api";
import { convertDropdownArray } from "@/common/function/convertDropdownArray";
import {
  Card,
  FormSelect,
  FormTextField,
  Grid,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useQuery } from "@tanstack/react-query";
import { ServiceSchemaType } from "../service.form.model";
export function filterById<T>(
  array: T[],
  key: keyof T,
  value: T[keyof T] | T[keyof T][]
): T[] {
  if (!Array.isArray(array)) return [];

  const values = Array.isArray(value) ? value : [value];

  return array.filter((item) => values.includes(item[key]));
}

export function findById<T>(
  array: T[],
  key: keyof T,
  value: T[keyof T]
): T | undefined {
  if (!Array.isArray(array)) return undefined;
  return array.find((item) => item[key] === value);
}

const BasicDetails = () => {
  const {
    form: { watch },
  } = useFormContext();

  const { data: getAllCategoryList } = useQuery({
    queryKey: [ServiceCategoryQueryKey.List],
    queryFn: () => {
      const res = serviceCategoryList();
      return res;
    },
  });

  const categoryId = watch("category_id");
  const categorypParentId = watch("parent_id");

  const getChildCategoryList: ServiceCategoryEntity | undefined = findById(
    getAllCategoryList?.items,
    "id",
    categoryId
  );
  const getSubChildCategoryList: ServiceCategoryEntity | undefined = findById(
    getAllCategoryList?.items,
    "id",
    categorypParentId
  );

  return (
    <div className="mb-4">
      <Card>
        <Card.Header title="Basic Details" />
        <Card.Body>
          <Grid>
            <Grid.Col>
              <FormTextField<ServiceSchemaType>
                name="title"
                label="Service Name"
                placeholder="Enter service name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Category</InputLabel>
              <FormSelect<ServiceSchemaType>
                name="category_id"
                options={convertDropdownArray({
                  dataSource: getAllCategoryList?.items,
                  keyName: { label: "title", value: "id" },
                })}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Sub category</InputLabel>
              <FormSelect<ServiceSchemaType>
                name="parent_id"
                options={convertDropdownArray<ServiceCategoryEntity>({
                  dataSource:
                    getChildCategoryList?.sub_service_categories || [],
                  keyName: { label: "title", value: "id" },
                })}
                disabled={!categoryId ? true : false}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Child category</InputLabel>
              <FormSelect<ServiceSchemaType>
                name="child_id"
                options={convertDropdownArray<ServiceCategoryEntity>({
                  dataSource:
                    getSubChildCategoryList?.sub_service_categories || [],
                  keyName: { label: "title", value: "id" },
                })}
                disabled={!categorypParentId ? true : false}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BasicDetails;
