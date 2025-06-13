import apiConfig from "@/common/http/apiConfig";
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, FieldValues, Path } from 'react-hook-form';
import { FiUpload } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { useFormContext } from "./formContext";

type UploadedFile = File;

type UploadedResponse = {
  items: string[];
};

type FormAutoUploadProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  className?: string;
};

export const FormAutoUpload = <T extends FieldValues>({ name }: FormAutoUploadProps<T>) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState<boolean[]>([]);
  const { control, form: { setValue, formState: { errors } } } = useFormContext();

  const mutation = useMutation({
    mutationFn: async (medias: UploadedFile[]) => {
      const formData = new FormData();
      medias.forEach((file) => formData.append("medias", file));
      const res = await apiConfig.post("/medias/create-list/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data as UploadedResponse;
    },
    onSuccess: ({ items }) => {
      const newUrls = [...uploadedUrls, ...items];
      setUploadedUrls(newUrls);
      setValue(name, newUrls as any);
      setUploading((prev) => prev.map(() => false));
    },
  });

  const handleDrop = useCallback((acceptedFiles: File[], onChange: (val: string[]) => void) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    setUploading((prev) => [...prev, ...acceptedFiles.map(() => true)]);
    mutation.mutate(acceptedFiles);
  }, [mutation]);

  const removeFile = (index: number, onChange: (val: string[]) => void) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newUrls = uploadedUrls.filter((_, i) => i !== index);
    const newUploading = uploading.filter((_, i) => i !== index);
    setFiles(newFiles);
    setUploadedUrls(newUrls);
    setUploading(newUploading);
    setValue(name, newUrls as any);
    onChange(newUrls);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop: (acceptedFiles) => handleDrop(acceptedFiles, onChange),
          multiple: true,
          accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'application/pdf': ['.pdf'],
          },
        });

        return (
          <div className="mt-4">
            <div
              {...getRootProps()}
              className={`p-10 text-center border-2 border-dashed rounded-xl transition-all ${
                isDragActive ? 'bg-gray-50 border-blue-400' : 'bg-white border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-center text-gray-500">
                <FiUpload className="h-8 w-8 mb-2" />
                <p>Drag & drop</p>
                <p className="text-sm">File supported by PDF, JPG or PNG</p>
              </div>
            </div>

            {errors[name as string] && (
              <p className="text-red-500 text-sm mt-2">
                {errors[name as string]?.message as string}
              </p>
            )}

            {files.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {files.map((file, index) => {
                  const preview = URL.createObjectURL(file);
                  return (
                    <div key={index} className="relative group border border-gray-300 overflow-hidden rounded-xl bg-gray-50">
                      <div className="flex justify-start items-center gap-4 p-2">
                        <img src={preview} alt={file.name} className="w-16 h-16 object-cover rounded" />
                        <p className="mt-1 text-sm text-gray-600 text-center truncate" title={file.name}>{file.name}</p>
                      </div>
                      {uploading[index] && (
                        <div className="w-full bg-gray-200 h-2 rounded mt-1">
                          <div className="bg-blue-500 h-2 rounded w-3/4 animate-pulse"></div>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => removeFile(index, onChange)}
                        className="absolute top-2 right-2 bg-red-500 p-1 rounded-full cursor-pointer shadow hidden group-hover:block"
                      >
                        <RxCrossCircled size={16} className="text-white" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
