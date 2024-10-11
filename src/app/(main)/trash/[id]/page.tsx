"use client";

import ContainerWrap from "@/components/layouts/ContainerWrap";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import ToPreviousPageButton from "@/app/(main)/components/ToPreviousPageButton";
import ImagePreview from "../components/ImagePreview";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton dari ShadCN

type ParamsProps = {
  params: {
    id: string;
  };
};

type TrashDetail = {
  id: number;
  title: string;
  description: string;
  city: string;
  location_url: string;
  uploader_name: string;
  pictures: string[] | null;
};

export default function TrashDetail({ params }: ParamsProps) {
  const [data, setData] = useState<TrashDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://localhost:9000/trash/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [params.id]);

  const commentData = [
    {
      id: 1,
      name: "rianabdillah",
      body: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      name: "doejohn",
      body: "Lorem ipsum dolor sit amet consectetur...",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-dvh flex flex-col items-center">
        <ContainerWrap>
          <div className="container">
            <ToPreviousPageButton />
          </div>
        </ContainerWrap>

        <ContainerWrap className="my-10">
          <div className="container flex sm:flex-row flex-col gap-5">
            {/* Skeleton ImagePreview */}
            <div className="basis-1/4 space-y-3">
              <Skeleton className="w-full h-64 aspect-square" />
              <div className="grid grid-cols-3 grid-flow-row gap-3">
                <Skeleton className="w-full h-24 aspect-square" />
                <Skeleton className="w-full h-24 aspect-square" />
                <Skeleton className="w-full h-24 aspect-square" />
              </div>
            </div>

            {/* Skeleton Detail */}
            <div className="basis-3/4 ml-5 flex flex-col gap-y-9">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          </div>
        </ContainerWrap>

        <ContainerWrap>
          <div className="container flex flex-col gap-2">
            <Skeleton className="h-6 w-1/4" />
            <div className="mt-5 flex flex-col gap-5">
              {/* Skeleton untuk komentar */}
              <div className="flex flex-row items-start gap-2">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-1 w-full">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>

              <div className="flex flex-row items-start gap-2">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-1 w-full">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>

            {/* Skeleton untuk form komentar */}
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-20" />
          </div>
        </ContainerWrap>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col items-center">
      <ContainerWrap>
        <div className="container">
          <ToPreviousPageButton />
        </div>
      </ContainerWrap>

      <ContainerWrap className="my-10">
        <div className="container flex sm:flex-row flex-col gap-5">
          {data && <ImagePreview data={data.pictures} />}
          <div className="basis-3/4 ml-5 flex flex-col gap-y-9">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg leading-3">{data?.title}</h3>
              <div>{data?.city}</div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4>Deskripsi</h4>
              <Separator orientation="horizontal" />
              <p>{data?.description}</p>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Titik lokasi</h4>
              <Separator orientation="horizontal" />
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={data?.location_url || "#"}
                className="inline-flex items-center gap-x-2"
              >
                <span>T</span>
                {data?.location_url}
              </Link>
            </div>

            <div className="flex flex-col gap-y-1">
              <h4>Pengunggah</h4>
              <Separator orientation="horizontal" />
              <Link href={"#"} className="w-max">
                {data?.uploader_name}
              </Link>
            </div>

            <Button variant={"default"} className="w-max">
              Bersihkan
            </Button>
          </div>
        </div>
      </ContainerWrap>

      <ContainerWrap>
        <div className="container flex flex-col gap-2">
          <div className="inline-flex gap-2 items-center p-0">
            <h3 className="font-semibold text-lg leading-3">Diskusi</h3>
          </div>

          <Suspense fallback={<div>Loading</div>}>
            <div className="mt-5 flex flex-col gap-5">
              {commentData &&
                commentData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-row items-start gap-2 relative"
                    >
                      <Image
                        className="rounded-full w-12"
                        src={"/images/initial-person.png"}
                        alt="profile"
                        width={100}
                        height={100}
                      />
                      <div className="my-auto p-0 flex flex-col gap-1">
                        <span className="font-semibold">
                          {item.name}
                          <span className="text-gray-500"> | </span>
                          <span className="text-xs font-extralight text-gray-500 leading-[8px]">
                            5 menit yang lalu
                          </span>
                        </span>
                        <p>{item.body}</p>
                        <Button
                          variant={"link"}
                          className="w-max p-0 underline underline-offset-1"
                        >
                          Balas komentar
                        </Button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Suspense>

          <form action="" className="flex flex-col gap-2 mt-5">
            <textarea
              rows={4}
              className="w-full border border-black p-2 resize-none"
              placeholder="Waah dekat rumah saya nih, gaskeun!!"
            ></textarea>

            <Button type="submit" className="w-max">
              Kirim
            </Button>
          </form>
        </div>
      </ContainerWrap>
    </div>
  );
}
