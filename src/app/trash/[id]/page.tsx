"use client";

import ContainerWrap from "@/components/layouts/container-wrap";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
export default function TrashDetail({ params }: Props) {
  const linkHistoryBefore = "/";
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params;
  return (
    <div className="min-h-dvh flex flex-col items-center">
      <ContainerWrap>
        <div className="container">
          <Button
            variant={"link"}
            className="flex flex-row items-center gap-x-2 px-0 font-bold hover:no-underline"
            onClick={() => router.push(linkHistoryBefore)}
          >
            <Image
              src={"/images/icons/arrow-left-icon.png"}
              alt=""
              width={15}
              height={15}
            />
            Kembali
          </Button>
          <Separator orientation="horizontal" />
        </div>
      </ContainerWrap>
      <ContainerWrap className="my-10">
        <div className="container flex flex-row">
          {/* <div>TrashDetail {params.id}</div> */}
          <div className="basis-1/4 space-y-3">
            <Image
              className="w-full aspect-square"
              src={"/images/initial-trash.png"}
              alt=""
              width={300}
              height={300}
            />
            <div className="grid grid-cols-3 gap-x-3">
              <div className="w-full">
                <Image
                  className="w-full aspect-square"
                  src={"/images/initial-trash.png"}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-full">
                <Image
                  className="w-full aspect-square"
                  src={"/images/initial-trash.png"}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="basis-3/4 ml-5 flex flex-col gap-y-9">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg leading-3">
                Sampah Pinggir Kali
              </h3>
              <div>Jakarta selatan</div>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Deskripsi</h4>
              <Separator orientation="horizontal" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                illo nisi praesentium ab harum at illum neque ullam nulla
                pariatur earum ad sit veniam, error dolor natus id quisquam
                doloremque, tenetur accusamus corporis libero, quaerat possimus
                consequatur. Sit culpa temporibus ipsum ut voluptate expedita,
                sequi incidunt consequuntur ea ullam nisi.
              </p>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Titik lokasi</h4>
              <Separator orientation="horizontal" />

              <Link href={"#"} className="inline-flex items-center gap-x-2">
                <span>T</span>
                https://google.maps.com
              </Link>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Pengunggah</h4>
              <Separator orientation="horizontal" />

              <Link href={"#"} className="w-max">
                Seseorang
              </Link>
            </div>

            <Button variant={"default"} className="w-max">
              Bersihkan
            </Button>
          </div>
        </div>
      </ContainerWrap>
    </div>
  );
}
