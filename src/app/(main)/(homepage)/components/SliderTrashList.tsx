"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { saveToSessionStorage } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SliderTrashList() {
  const pathname = usePathname();
  const router = useRouter();

  function handleOpenDetailItem(id: string) {
    saveToSessionStorage("link-history", pathname);
    router.push(`/trash/${id}`);
  }
  return (
    <div className="flex flex-col gap-5">
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/3 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-1">
                <Card
                  className="overflow-hidden cursor-pointer"
                  onClick={() =>
                    handleOpenDetailItem("trashx-" + index.toString())
                  }
                >
                  <CardContent className="flex flex-col justify-center p-0 gap-5">
                    <Image
                      className="w-full aspect-square object-cover"
                      src={"/images/initial-trash.png"}
                      alt=""
                      width={700}
                      height={700}
                    />

                    <div className="pl-2 pb-2 space-y-2">
                      <div className="text-sm flex flex-row items-center gap-2">
                        <Image
                          src={"/images/icons/location-icon.png"}
                          alt=""
                          width={10}
                          height={10}
                        />
                        Jakarta
                      </div>
                      <div className="font-semibold">Sampah jalan</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3" />
        <CarouselNext className="-right-3" />
      </Carousel>

      <Button className="w-min">Lihat lainnya</Button>
    </div>
  );
}
