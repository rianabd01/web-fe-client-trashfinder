"use client";

import ContainerWrap from "@/components/layouts/container-wrap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  function handleOpenItem(id: string) {
    console.log("handleOpenItem");
    router.push(`/trash/${id}`);
  }

  const router = useRouter();

  return (
    <>
      <div className="min-h-dvh flex flex-col items-center">
        <ContainerWrap className="bg-gradient-to-t from-gray-200/5 from-0% to-gray-600/50 to-80%">
          <div className="container h-[35rem] flex flex-col justify-center">
            <h1 className="text-5xl font-bold uppercase">Kolaborasi</h1>
            <h1 className="text-5xl font-bold uppercase">Untuk</h1>
            <h1 className="text-5xl font-bold uppercase">Lingkungan</h1>
          </div>
        </ContainerWrap>

        <ContainerWrap>
          <div className="container flex flex-col gap-5">
            <h3 className="font-bold text-lg">
              Sampah yang dapat kamu bersihkan
            </h3>
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
                          handleOpenItem("trashx-" + index.toString())
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
        </ContainerWrap>
      </div>
    </>
  );
}
