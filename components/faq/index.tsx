"use client";

import { cn } from "@/lib/utils";
import { FAQData } from "@/types/faq";
import { useState } from "react";
import Section from "../UI/section";
import ContactCTA from "./contact";
import FAQItemComponent from "./faq-item";
interface FAQProps {
  data: FAQData;
  className?: string;
}

export default function FAQ({ data, className }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Section
      className={cn(
        "relative flex flex-col lg:flex-row gap-8 items-start",
        className
      )}
    >
      {/* Cercle violet en position absolue */}
      <div className="absolute top-1/3 md:top-0 md:left-1/2 transform  w-64 h-64 lg:w-96 lg:h-96 bg-ultraviolet-900 rounded-full blur-[100px] z-0"></div>

      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col">
          <span className="text-ultraviolet-900 text-[14px] font-mansfield bg-ultraviolet-700/80 py-1 px-3 rounded-full w-fit">
            f.a.q
          </span>
          <h2 className="text-white text-[2rem] md:text-[2.5rem] font-stara tracking-tight font-bold max-w-2xl">
            {data.title}
          </h2>
          <p className="text-white/80 text-[1rem] font-mansfield tracking-tight opacity-80 max-w-md">
            {data.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full max-w-4xl space-y-4">
          {data.items.map((item) => (
            <FAQItemComponent
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>

      <ContactCTA />
    </Section>
  );
}
