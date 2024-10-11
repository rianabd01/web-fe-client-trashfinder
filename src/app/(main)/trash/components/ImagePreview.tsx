"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ImagePreview({ data }: { data: string[] }) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  function handleImage(index: number) {
    setSelectedImage(index);
  }
  return (
    <div className="basis-1/4 space-y-3">
      <Image
        className="w-full object-cover aspect-square"
        src={data[selectedImage]}
        alt=""
        width={300}
        height={300}
      />
      <div className="grid grid-cols-3 grid-flow-row gap-3">
        {data.map((item, index) => {
          if (index === selectedImage) {
            return;
          }
          return (
            <Image
              key={index}
              onClick={() => handleImage(index)}
              className="w-full object-cover aspect-square cursor-pointer"
              src={item}
              alt=""
              width={300}
              height={300}
            />
          );
        })}
      </div>
    </div>
  );
}
