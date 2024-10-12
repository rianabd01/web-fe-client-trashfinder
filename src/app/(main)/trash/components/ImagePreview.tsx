"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton dari ShadCN

export default function ImagePreview({ data }: { data: string[] | null }) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  function handleImage(index: number) {
    setSelectedImage(index);
  }

  if (!data || data.length === 0) {
    return (
      <div className="container sm:basis-1/4 space-y-3 min-w-[250px]">
        <Skeleton className="w-full h-64 aspect-square" />

        <div className="grid grid-cols-3 grid-flow-row gap-3">
          <Skeleton className="w-full h-24 aspect-square" />
          <Skeleton className="w-full h-24 aspect-square" />
        </div>
      </div>
    );
  }

  return (
    <div className="basis-1/4 space-y-3">
      <Image
        className="w-full object-cover aspect-square shadow"
        src={`http://${data[selectedImage]}`}
        alt={`Selected Image ${selectedImage}`}
        width={700}
        height={700}
      />

      <div className="grid grid-cols-3 grid-flow-row gap-3">
        {data.map((item, index) => {
          if (index === selectedImage) return null;

          return (
            <Image
              key={index}
              onClick={() => handleImage(index)}
              className="w-full object-cover aspect-square cursor-pointer shadow-lg"
              src={`http://${item}`}
              alt={`Thumbnail ${index}`}
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </div>
  );
}
