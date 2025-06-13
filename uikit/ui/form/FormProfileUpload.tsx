import { useState } from "react";
import { Controller, FieldValues, Path } from 'react-hook-form';
import { CiImageOn } from "react-icons/ci";
import { useFormContext } from "./formContext";

type FormProfileUploadProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  width?: number;
  height?: number;
};

const FormProfileUpload = <T extends FieldValues>({
  name,
  width = 250,
  height = 250,
}: FormProfileUploadProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const [preview, setPreview] = useState<string | null>(field.value || null);

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (e) => {
            if (typeof e.target?.result === "string") {
              field.onChange(e.target.result); // Update RHF field
              setPreview(e.target.result); // Set preview
            }
          };

          reader.readAsDataURL(file);
        };

        return (
          <div className="flex flex-col items-center justify-center space-y-2">
            <div
              className={`flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-gray-200`}
              style={{ width, height }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Uploaded Image"
                  className="object-cover w-full h-full rounded-md"
                />
              ) : (
                <CiImageOn
                  className="text-gray-500"
                  size={Math.min(width, height) * 0.7}
                />
              )}
            </div>
            <label
              htmlFor="image-upload"
              className="hover:underline text-blue-600 transition-all duration-200 ease-in-out cursor-pointer"
            >
              <p className="text-base text-blue-600 transition-all duration-200 ease-in-out">
                Upload Picture
              </p>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        );
      }}
    />
  );
};

export default FormProfileUpload;