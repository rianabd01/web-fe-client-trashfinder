import React from "react";
import ContainerWrap from "@/components/layouts/ContainerWrap";
import SliderTrashList from "./components/SliderTrashList";

export default function Home() {
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

            <SliderTrashList />
          </div>
        </ContainerWrap>
      </div>
    </>
  );
}
