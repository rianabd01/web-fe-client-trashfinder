import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};
export default function ContainerWrap({ children, className }: Props) {
  return (
    <div className={cn("w-full flex flex-col items-center ", className)}>
      {children}
    </div>
  );
}
