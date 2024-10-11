"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { saveToSessionStorage } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function ToPreviousPageButton() {
  let linkHistory = "/";

  if (sessionStorage.getItem("link-history")) {
    linkHistory = sessionStorage.getItem("link-history") || "/";
  }

  const pathname = usePathname();
  const router = useRouter();

  function handleBack() {
    saveToSessionStorage("link-history", pathname);
    router.push(linkHistory);
  }
  return (
    <div className="flex flex-col">
      <Button
        variant={"link"}
        className="flex flex-row self-start items-center gap-x-2 px-0 font-bold hover:no-underline"
        onClick={handleBack}
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
  );
}
