"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import imageCompression from "browser-image-compression";
import Swal from "sweetalert2";

export default function UploadPage() {
  const [files, setFiles] = useState<{ [key: number]: File | null }>({
    0: null,
    1: null,
    2: null,
  });

  type District = {
    id: number;
    name: string;
  };

  type CityData = {
    [city: string]: District[];
  };
  const [cityData, setCityData] = useState<CityData | object>({});
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:9000/cities");
        setCityData(response.data.results);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleFileSelect = async (index: number, selectedFile: File) => {
    try {
      // Set the compression options
      const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      // Compress the image
      const compressedFile = await imageCompression(selectedFile, options);

      setFiles((prevFiles) => ({
        ...prevFiles,
        [index]: compressedFile,
      }));

      console.log(`Original file size: ${selectedFile.size / 1024} KB`);
      console.log(`Compressed file size: ${compressedFile.size / 1024} KB`);
    } catch (error) {
      console.error("Error while compressing the image", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validFiles = Object.values(files).filter((file) => file !== null);

    if (validFiles.length !== 3) {
      Swal.fire({
        title: "Upload gambar",
        text: "Tolong upload 3 gambar",
        icon: "warning",
      });
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("city_id", "1"); // Adjust if needed
      formData.append("address", address);
      formData.append("location_url", locationLink);

      if (files[0]) formData.append("gambar1", files[0] as File);
      if (files[1]) formData.append("gambar2", files[1] as File);
      if (files[2]) formData.append("gambar3", files[2] as File);

      await axios.post("http://localhost:9000/trash", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Berhasil",
        text: "Sampah berhasil diunggah!",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Gagal",
        text: "Maaf, gagal unggah sampah.",
        icon: "error",
      });
    }
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [locationLink, setLocationLink] = useState<string>("");
  const [address, setAddress] = useState<string>("");

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
                onChange={(e) => setLocationLink(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4">
              <label htmlFor="address" className="flex flex-col col-span-1">
                Wilayah{" "}
                <span className="text-sm leading-2 text-gray-700">
                  Dimana lokasi berada
                </span>
              </label>

              <div className="col-start-2 flex flex-row gap-5 col-span-2">
                <Select onValueChange={(value) => setSelectedCity(value)}>
                  <SelectTrigger className="w-full border-black">
                    <SelectValue placeholder="Pilih Kota" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(cityData).map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(value) => setAddress(value)}
                  disabled={!selectedCity}
                >
                  <SelectTrigger className="w-full border-black">
                    <SelectValue placeholder="Pilih wilayah" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCity &&
                      cityData[selectedCity]?.map((district: District) => (
                        <SelectItem key={district.id} value={district.name}>
                          {district.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
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
