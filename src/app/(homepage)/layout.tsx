import Link from "next/link";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-gray-700 w-full h-20">
        <div className="container m-auto w-full h-full flex flex-row justify-between items-center text-white">
          <div>LOGO</div>
          <nav className="flex flex-row gap-5">
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
      {children}
    </>
  );
}
