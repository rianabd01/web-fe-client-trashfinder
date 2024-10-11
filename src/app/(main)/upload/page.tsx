"use client";
import React, { useState } from "react";
import ContainerWrap from "@/components/layouts/ContainerWrap";
import ToPreviousPageButton from "@/app/(main)/components/ToPreviousPageButton";
import ImageUploader from "@/components/layouts/ImageUploader";

export default function UploadPage() {
  const [files, setFiles] = useState<{ [key: number]: File | null }>({
    0: null,
    1: null,
    2: null,
  });

  // Handle file selection for each uploader by index
  const handleFileSelect = (index: number, selectedFile: File) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [index]: selectedFile,
    }));
  };

  // Submit files to the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Filter out null files
    const validFiles = Object.values(files).filter((file) => file !== null);

    if (validFiles.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();
    validFiles.forEach((file, index) => {
      if (file) {
        formData.append(`file-${index}`, file);
        console.log(file);
      }
    });
    // alert("Please select images");
  };

  return (
    <div className="min-h-dvh space-y-10">
      <ContainerWrap>
        <div className="container">
          <ToPreviousPageButton />
        </div>
      </ContainerWrap>

      <ContainerWrap>
        <div className="container flex flex-row justify-center space-x-4">
          {/* ImageUploader components with index passed */}
          <ImageUploader onFileSelect={(file) => handleFileSelect(0, file)} />
          <ImageUploader onFileSelect={(file) => handleFileSelect(1, file)} />
          <ImageUploader onFileSelect={(file) => handleFileSelect(2, file)} />
        </div>
      </ContainerWrap>

      <ContainerWrap>
        <div className="container">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="inline-flex gap-5">
              <label htmlFor="title" className="flex flex-col w-2/6">
                Sampah apa yang kamu temukan{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Kasih judul yang cocok
                </span>
              </label>
              <input
                type="text"
                id="title"
                className="w-4/6 border border-gray-900 rounded focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 px-2"
              />
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded w-max"
              type="submit"
            >
              Upload Files
            </button>
          </form>
        </div>
      </ContainerWrap>
    </div>
  );
}
