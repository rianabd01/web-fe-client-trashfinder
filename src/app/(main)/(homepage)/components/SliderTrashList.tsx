"use client";

import React, { useEffect, useState } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

type trashItemProps = {
  id: number;
  title: string;
  description: string;
  city: string;
  pictures: string | null;
};
export default function SliderTrashList() {
  const [data, setData] = useState<trashItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:9000/trash");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.results); // Set the fetched data into state
        console.log(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData(); // Call the async function to fetch data
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  function handleOpenDetailItem(id: string) {
    saveToSessionStorage("link-history", pathname);
    router.push(`/trash/${id}`);
  }
  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 6 }).map(
              (
                _,
                index // Skeleton untuk 6 item
              ) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/3 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex flex-col justify-center p-0 gap-5">
                        {/* Skeleton untuk gambar */}
                        <div className="w-full h-full p-5">
                          <Skeleton className="object-cover w-full aspect-square" />
                        </div>

                        <div className="pl-2 pb-2 space-y-2">
                          <div className="text-sm flex flex-row items-center gap-2">
                            {/* Skeleton untuk icon location */}
                            <Skeleton className="w-4 h-4" />
                            {/* Skeleton untuk lokasi */}
                            <Skeleton className="w-24 h-4" />
                          </div>

                          {/* Skeleton untuk judul */}
                          <Skeleton className="w-40 h-6" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="-left-3" />
          <CarouselNext className="-right-3" />
        </Carousel>

        <Button className="w-min">Lihat lainnya</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-1">
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-1/3 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-1">
                <Card
                  className="overflow-hidden cursor-pointer"
                  onClick={() => handleOpenDetailItem(item.id.toString())}
                >
                  <CardContent className="flex flex-col justify-center p-0 gap-5">
                    {item.pictures ? (
                      <Image
                        className="w-full aspect-square object-cover"
                        src={`http://${item.pictures}`}
                        alt=""
                        width={700}
                        height={700}
                      />
                    ) : (
                      <Image
                        className="w-full aspect-square object-cover"
                        src="/images/no-image.png"
                        alt=""
                        width={700}
                        height={700}
                      />
                    )}

                    <div className="pl-2 pb-2 space-y-2">
                      <div className="text-sm flex flex-row items-center gap-2">
                        <Image
                          src={"/images/icons/location-icon.png"}
                          alt=""
                          width={10}
                          height={10}
                        />
                        {item.city}
                      </div>
                      <div className="font-semibold">{item.title}</div>
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
