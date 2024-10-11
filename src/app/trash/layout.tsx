import React from "react";
const Navbar = React.lazy(() => import("@/components/layouts/navbar"));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
