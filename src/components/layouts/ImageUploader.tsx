// components/layouts/ImageUploader.tsx
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  onFileSelect: (file: File) => void; // Prop to pass selected file
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onFileSelect(file); // Send the selected file to parent
    }
  };

  return (
    <div
      className="relative w-20 h-20 border-dotted border-2 border-black flex items-center justify-center text-2xl cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      {selectedImage ? (
        <Image
          src={selectedImage}
          alt="Uploaded image"
          width={200}
          height={200}
          className="object-cover"
        />
      ) : (
        "+"
      )}
      <input type="file" ref={inputRef} hidden onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
