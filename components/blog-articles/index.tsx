"use client";

import { blogArticles } from "@/data/blog";
import { useState } from "react";
import Section from "../UI/section";
import BlogCarousel from "./blog-carousel";

export default function BlogArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalArticles = blogArticles.length;

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < totalArticles - 1;

  const nextArticle = () => {
    if (canGoForward && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const previousArticle = () => {
    if (canGoBack && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <Section>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col ">
          <span className="text-ultraviolet-900 text-[14px] font-mansfield bg-ultraviolet-700/80 py-1 px-3 rounded-full w-fit">
            blog
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-white text-[2rem] md:text-[2.5rem] font-stara tracking-tight text-center font-bold max-w-2xl">
              Restez à la pointe de la technologie
            </h2>
          </div>
          <p className="text-gray-300 font-mansfield text-lg max-w-2xl leading-relaxed">
            Découvrez nos derniers articles sur le développement web, la
            blockchain et les technologies émergentes.
          </p>
        </div>

        {/* Carousel */}
        <BlogCarousel
          articles={blogArticles}
          currentIndex={currentIndex}
          isTransitioning={isTransitioning}
          onPrevious={previousArticle}
          onNext={nextArticle}
          canGoBack={canGoBack && !isTransitioning}
          canGoForward={canGoForward && !isTransitioning}
        />
      </div>
    </Section>
  );
}
