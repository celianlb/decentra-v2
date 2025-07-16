import { cn } from "@/lib/utils";
import React from "react";
export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-12 my-24 md:mx-[120px] md:my-48", className)}>
      {children}
    </section>
  );
}
