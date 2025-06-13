import { Fragment, HTMLProps, useState } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../basic";
import { useFormContext } from "./formContext";

type FormCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  label: string;
} & HTMLProps<HTMLInputElement>;

export const FormCheckbox = <T extends FieldValues>(
  props: FormCheckboxProps<T>
) => {
  const { control } = useFormContext<T>();
  const { name, label, className, ...rest } = props;
  const [checked, setChecked] = useState(false);
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { value, onChange }, fieldState }) => {
        return (
          <Fragment>
            <Checkbox
              id={name}
              label={label}
              checked={value ? true : false}
              onChange={() => {
                if (!checked) {
                  onChange(rest.value);
                  setChecked((prev) => !prev);
                } else {
                  setChecked((prev) => !prev);
                  onChange(null);
                }
              }}
              {...rest}
            />
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

interface CustomCheckboxProps {
  value: number | string;
  onCheck: (value: number | string) => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  value,
  onCheck,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    onCheck(value);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-5 h-5"
      />
      <span className="text-base">{value}</span>
    </label>
  );
};
