import { FC, InputHTMLAttributes } from "react";

type TextFieldProps = {
  label?: string;
  labelColor?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<TextFieldProps> = ({
  label,
  labelColor,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label
          className={`block font-semibold ${
            labelColor ? labelColor : "text-gray-600"
          } mb-1`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded my-1 focus:outline-none focus:ring-1 focus:ring-blue-400 ${className}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

