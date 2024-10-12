import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContainerWrap from "./ContainerWrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <ContainerWrap className="bg-gray-200 mt-10">
      <footer className="container flex flex-row flex-wrap justify-between gap-10 py-10">
        <div className="flex flex-col gap-5 w-[347px]">
          <Image
            src="/images/logo-black.png"
            alt="logo peluang"
            width={150}
            height={20}
          />
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            adipisci.{" "}
            <span className="text-gray-500">#BersihkanLingkunganMu</span>
          </p>
          <div className="flex flex-row gap-[14px]">
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaTiktok />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg whitespace-nowrap">Sitemap</h3>

          <ul className="flex flex-col gap-[8px] font-[500]">
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Tentang kami
              </Link>
            </li>
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Upload
              </Link>
            </li>
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Daftar sampah perlu dibersihkan
              </Link>
            </li>
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Daftar sampah sudah dibersihkan{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h3 className="font-bold text-[18px] whitespace-nowrap">Pengguna</h3>

          <ul className="flex flex-col gap-[8px] font-[500]">
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Login
              </Link>
            </li>
            <li>
              <Link href={"#"} className="whitespace-nowrap">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[33px]">
          <div>
            <form action="" className="flex flex-col gap-[16px]">
              <div className="relative flex flex-row justify-between items-center w-[364px] h-[60.79px] gap-[8px] rounded-[45.59px] py-[0px] pl-[4px] shadow bg-white">
                <input
                  type="text"
                  className="appearance-none text-caption-small w-full border-none bg-transparent ml-5 focus:border-none focus:outline-none focus:ring-0"
                  placeholder="Masukkan email kamu..."
                />
                <Button className="rounded-[45.59px] h-full px-7 text-white whitespace-nowrap">
                  Ikuti kami
                </Button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </ContainerWrap>
  );
}
