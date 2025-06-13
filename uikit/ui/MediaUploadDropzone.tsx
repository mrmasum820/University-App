import apiConfig from "@/common/http/apiConfig";
import React, { useState } from "react";

const MediaUploadDropzone = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Handle file drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("drop", e.dataTransfer.files);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  // Handle manual file selection
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      console.log("target", e.target.files);

      setFiles(selectedFiles);
    }
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setMessage("কোনো ফাইল সিলেক্ট হয়নি!");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("medias", file); // backend যে key এর জন্য খুঁজে
    });
    console.log(formData);

    try {
      const response = await apiConfig.post(
        "https://api.bnine.co/api/v1/medias/create-list ",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploading(false);
      setMessage("ফাইলগুলো সফলভাবে আপলোড হয়েছে!");
      console.log("Response:", response.data);
    } catch (error) {
      setUploading(false);
      setMessage("আপলোড ব্যর্থ হয়েছে।");
      console.error("Upload error:", error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>ফাইল ড্রপ জোন</h3>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          border: "2px dashed #aaa",
          borderRadius: "8px",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        <p>ফাইলগুলো এখানে ড্রপ করুন অথবা</p>
        <input type="file" multiple onChange={handleFileInput} />
      </div>

      <button
        onClick={handleSubmit}
        disabled={uploading}
        className="bg-blue-500"
      >
        {uploading ? "আপলোড হচ্ছে..." : "আপলোড"}
      </button>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
};

export default MediaUploadDropzone;
