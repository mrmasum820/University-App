import { cn } from "@/uikit/cn";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./formContext";

type FormToggleProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
}

export function FormToggle<T extends FieldValues>({ name, label }: FormToggleProps<T>) {
    const { control, form:{ setValue }} = useFormContext();
    const handleSelect = (value: "Email" | "Phone") => {
        setValue(name, value as T[typeof name]);
      };

    const base = "px-4 py-2 rounded border transition-all text-sm font-medium cursor-pointer w-full h-[45px] bg-gray-100 hover:bg-gray-500 hover:text-white border border-gray-300 focus:outline-none";
    return (
        <Controller 
        name={name} 
        control={control} 
        render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => {
            return (
                <div className="">
                    <label className="block font-semibold mb-1 text-gray-600">{label}</label>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => handleSelect("Email")}
                            className={cn(base, value === "Email" && "bg-gray-500 text-white" )}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSelect("Phone")}
                            className={cn(base, value === "Phone" && "bg-gray-500 text-white" )}
                        >
                            Phone
                        </button>
                    </div>
                    <input type="hidden" onChange={onChange} value={value} ref={ref} onBlur={onBlur} />
                </div>
            )
        }} />
    );
}
