import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

interface FileItem {
  file: File;
  preview: string | null;
  progress: number;
}

interface FileUploadProps {
  onUpload: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null, // Preview only for images
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    uploadFiles(newFiles);
  }, []);

  const uploadFiles = (newFiles: FileItem[]) => {
    newFiles.forEach((fileItem) => {
      let uploaded = 0;
      const totalSize = fileItem.file.size;

      const interval = setInterval(() => {
        uploaded += totalSize * 0.1;
        setFiles((prevFiles) =>
          prevFiles.map((item) =>
            item.file === fileItem.file
              ? {
                  ...item,
                  progress: Math.min((uploaded / totalSize) * 100, 100),
                }
              : item
          )
        );

        if (uploaded >= totalSize) {
          clearInterval(interval);
          onUpload(files.map((f) => f.file));
        }
      }, 300);
    });
  };

  const removeFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((item) => item.file !== file));
    if (file.type.startsWith("image/")) {
      URL.revokeObjectURL(file.name);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [], // All image formats
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.ms-excel": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
  });

  return (
    <div className="w-full mx-auto p-4">
      {/* File Preview List */}
      <div className="flex flex-wrap gap-4 my-2 space-y-3">
        {files.map((fileItem, index) => (
          <div
            key={index}
            className="p-2 border-2 border-gray-100 w-32 h-32 relative"
          >
            {fileItem.preview ? (
              <Image
                src={fileItem.preview}
                width={120}
                height={120}
                alt="preview"
                className="object-cover mr-3"
              />
            ) : (
              // <FiFileText className="w-12 h-12 text-gray-600 mr-3" />
              <Image
                src="/adobe.png"
                width={120}
                height={120}
                alt="preview"
                className="object-cover mr-3"
              />
            )}
            <div className="flex-1 absolute bottom-1 left-1 right-1">
              <p className="text-sm font-medium">{fileItem.file.name}</p>
              <div className="w-full h-1 bg-gray-200 rounded mt-1">
                <div
                  className="h-1 bg-green-500 rounded"
                  style={{ width: `${fileItem.progress}%` }}
                ></div>
              </div>
            </div>
            <button
              className="ml-3 text-gray-700 hover:text-gray-900 absolute top-1 right-1"
              onClick={() => removeFile(fileItem.file)}
            >
              <RxCrossCircled className="text-xl" />
            </button>
          </div>
        ))}
      </div>
      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className="w-full h-40 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100 transition"
      >
        <FiUpload className="text-3xl mb-2" />
        <p>Drag & drop</p>
        <span className="text-sm">File supported by PDF, JPG or PNG</span>
        <input {...getInputProps()} />
      </div>
    </div>
  );
};

export default FileUpload;
