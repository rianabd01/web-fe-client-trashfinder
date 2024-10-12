import React from "react";
import ContainerWrap from "@/components/layouts/ContainerWrap";
import SliderTrashList from "./components/SliderTrashList";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  const aboutUsImage = [
    "/images/clean-park.jpg",
    "/images/clean-sea.jpg",
    "/images/clean-river.jpg",
  ];
  return (
    <>
      <div className="min-h-dvh flex flex-col items-center">
        <ContainerWrap className="bg-gradient-to-t from-gray-200/5 from-0% to-gray-600/50 to-80% min-h-dvh">
          <div className="container h-full flex flex-col justify-center my-auto">
            <h1 className="text-5xl font-bold uppercase">Kolaborasi</h1>
            <h1 className="text-5xl font-bold uppercase">Untuk</h1>
            <h1 className="text-5xl font-bold uppercase">Lingkungan</h1>
          </div>
        </ContainerWrap>
        <ContainerWrap>
          <div className="container flex flex-col md:flex-row items-center gap-5">
            <Carousel
              className="w-3/6 h-2/4"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {aboutUsImage.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={item}
                            alt=""
                            width={900}
                            height={900}
                            className="object-cover w-full aspect-square"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-2xl text-center">Impian kami</h4>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                iusto iste ducimus nisi iure reiciendis? Consequuntur, nobis
                suscipit hic, labore excepturi in non accusamus facilis
                provident corporis obcaecati pariatur neque.
              </p>
            </div>
          </div>
        </ContainerWrap>

        <ContainerWrap className="mt-10">
          <div className="container flex flex-col gap-5">
            <h3 className="font-bold text-lg">
              Sampah yang dapat kamu bersihkan
            </h3>

            <SliderTrashList />
            <h3 className="font-bold text-lg mt-5">Sampah sudah bersih</h3>
            <SliderTrashList />
          </div>
        </ContainerWrap>
      </div>
    </>
  );
}
