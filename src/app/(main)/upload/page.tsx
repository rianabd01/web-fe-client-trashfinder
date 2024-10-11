"use client";
import React, { useState } from "react";
import ContainerWrap from "@/components/layouts/ContainerWrap";
import ToPreviousPageButton from "@/app/(main)/components/ToPreviousPageButton";
import ImageUploader from "@/components/layouts/ImageUploader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
        console.log(title, description);
      }
    });
    // alert("Please select images");
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
          <ImageUploader
            onFileSelect={(file) => handleFileSelect(0, file)}
            className="w-32 h-32"
          />
          <ImageUploader
            onFileSelect={(file) => handleFileSelect(1, file)}
            className="w-32 h-32"
          />
          <ImageUploader
            onFileSelect={(file) => handleFileSelect(2, file)}
            className="w-32 h-32"
          />
        </div>
      </ContainerWrap>

      <ContainerWrap>
        <div className="container">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-4">
              <label htmlFor="title" className="flex flex-col col-span-1">
                Sampah apa yang kamu temukan{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Kasih judul yang cocok
                </span>
              </label>
              <Input
                type="text"
                id="title"
                className="col-span-3 border border-gray-900 rounded focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 px-2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4">
              <label htmlFor="description" className="flex flex-col col-span-1">
                Deskripsikan sampahnya{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Jelaskan sampah itu
                </span>
              </label>
              <Textarea
                id="description"
                className="col-span-3 border border-gray-900 rounded focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 px-2"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4">
              <label htmlFor="loc" className="flex flex-col col-span-1">
                Titik lokasi{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Bagikan titik lokasi pada aplikasi maps kamu
                </span>
              </label>
              <Input
                type="text"
                id="loc"
                className="col-span-3 border border-gray-900 rounded focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 px-2"
              />
            </div>
            <div className="grid grid-cols-4">
              <label htmlFor="title" className="flex flex-col col-span-1">
                Wilayah{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Dimana kamu menemukan sampah ini
                </span>
              </label>
              <Select>
                <SelectTrigger className="w-full col-span-1 border-black">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4">
              <Button type="submit" className="col-start-2 w-max">
                Unggah
              </Button>
            </div>
          </form>
        </div>
      </ContainerWrap>
    </div>
  );
}
