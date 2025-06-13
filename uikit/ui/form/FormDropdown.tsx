import { Fragment } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { ActionDropdown } from "../basic";
import { useFormContext } from "./formContext";

type FormDropdownProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  options: { id: number; label: string }[];
  useQueryList?: {
    queryKey?: string | number[];
    queryFnApi?: <R>() => Promise<R>;
    enabled?: boolean;
  };
};

export const FormDropdown = <T extends FieldValues, R>(
  props: FormDropdownProps<T>
) => {
  const { control } = useFormContext<T>();
  const { name, options = [], className, useQueryList, ...rest } = props;

  // const { data, isLoading, isSuccess } = useQuery({
  //   queryKey: [useQueryList?.queryKey],
  //   queryFn: () => useQueryList?.queryFnApi(),
  //   enabled: useQueryList?.enabled,
  // });

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { ref, value, onChange }, fieldState }) => {
        return (
          <Fragment>
            <ActionDropdown onChange={onChange} options={options} />
            {fieldState?.error && (
              <small className="text-red-500">
                {fieldState?.error?.message}
              </small>
            )}
          </Fragment>
        );
      }}
    />
  );
};
