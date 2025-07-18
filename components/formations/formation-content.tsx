"use client";

import { cn } from "@/lib/utils";
import { FormationSection } from "@/types/formation";
import { useEffect, useState } from "react";

interface FormationContentProps {
  section: FormationSection;
  isActive: boolean;
}

export default function FormationContent({
  section,
  isActive,
}: FormationContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Délai léger pour l'animation d'entrée
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="space-y-6">
      {/* En-tête de section */}
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg font-stara">
              {section.id === "postuler" ? "!" : ""}
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white font-stara">
              {section.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div
        className={cn(
          "transition-all duration-700 ease-out delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="relative">
          {/* Carte de contenu */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />

            {/* Grille de points décorative */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundSize: "20px 20px",
                backgroundImage:
                  "radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)",
              }}
            />

            {/* Contenu HTML */}
            <div
              className="relative z-10 prose prose-lg prose-invert max-w-none font-mansfield"
              style={
                {
                  "--tw-prose-body": "rgb(209 213 219)",
                  "--tw-prose-headings": "rgb(255 255 255)",
                  "--tw-prose-lead": "rgb(156 163 175)",
                  "--tw-prose-links": "rgb(143 94 238)",
                  "--tw-prose-bold": "rgb(255 255 255)",
                  "--tw-prose-counters": "rgb(156 163 175)",
                  "--tw-prose-bullets": "rgb(75 85 99)",
                  "--tw-prose-hr": "rgb(55 65 81)",
                  "--tw-prose-quotes": "rgb(209 213 219)",
                  "--tw-prose-quote-borders": "rgb(75 85 99)",
                  "--tw-prose-captions": "rgb(156 163 175)",
                  "--tw-prose-code": "rgb(209 213 219)",
                  "--tw-prose-pre-code": "rgb(209 213 219)",
                  "--tw-prose-pre-bg": "rgb(17 24 39)",
                  "--tw-prose-th-borders": "rgb(55 65 81)",
                  "--tw-prose-td-borders": "rgb(75 85 99)",
                } as React.CSSProperties
              }
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        </div>
      </div>

      {/* Indicateur de progression */}
      <div
        className={cn(
          "flex justify-center transition-all duration-700 ease-out delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400" />
        </div>
      </div>
    </div>
  );
}
