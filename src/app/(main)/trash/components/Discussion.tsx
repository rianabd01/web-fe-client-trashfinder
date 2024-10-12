"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

type discussionProps = {
  data: {
    id: string;
    name: string;
    body: string;
  };
};
export default function Discussion({ data }: discussionProps) {
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);
  return (
    <div key={data.id} className="flex flex-row items-start gap-2 relative">
      <Image
        className="rounded-full w-12 shadow"
        src={"/images/initial-person.png"}
        alt="profile"
        width={100}
        height={100}
      />
      <div className="my-auto p-0 flex flex-col gap-1 w-full">
        <span className="font-semibold">
          {data.name}
          <span className="text-gray-500"> | </span>
          <span className="text-xs font-extralight text-gray-500 leading-[8px]">
            5 menit yang lalu
          </span>
        </span>
        <p>{data.body}</p>
        <Button
          variant={"link"}
          className="w-max p-0 underline underline-offset-1"
          onClick={() => setIsReplyOpen(!isReplyOpen)}
        >
          Balas komentar
        </Button>
        <form
          action=""
          className={`${
            isReplyOpen ? "flex" : "hidden"
          } flex-row items-start gap-2 relative mt-5`}
        >
          <Image
            className="rounded-full w-12 aspect-square shadow"
            src={"/images/initial-person.png"}
            alt="profile"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2 w-full">
            <textarea
              rows={4}
              className="w-full border border-black p-2 resize-none"
              placeholder="Tulis balasanmu"
            ></textarea>
            <Button type="submit" className="w-max">
              Kirim
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
