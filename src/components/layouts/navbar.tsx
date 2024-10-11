"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-700 w-full h-20">
      <div className="container m-auto w-full h-full flex flex-row justify-between items-center text-white">
        <div>LOGO</div>
        <Button
          variant={"ghost"}
          onClick={() => setIsOpen(true)}
          className="sm:hidden p-0 hover:bg-transparent hover:scale-110 transition-all duration-300"
        >
          <Image
            src={"/images/icons/light-hamburger-menu-icon.png"}
            alt=""
            width={20}
            height={20}
          />
        </Button>
        <nav
          className={`z-10 fixed h-full w-1/2 flex flex-col ${
            isOpen === true ? "right-0" : "-right-1/2"
          } top-0 text-black px-5 py-5 sm:p-0 bg-white sm:text-white sm:bg-transparent sm:w-auto sm:static sm:flex-row items-center gap-5 transition-all duration-300`}
        >
          <div className="flex flex-row w-full justify-end sm:hidden">
            <Button variant={"ghost"} onClick={() => setIsOpen(false)}>
              X
            </Button>
          </div>
          <Link href={"#"} className="cursor-pointer">
            home
          </Link>
          <Link href={"#"} className="cursor-pointer">
            login
          </Link>
          <Link href={"#"} className="cursor-pointer">
            upload
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
