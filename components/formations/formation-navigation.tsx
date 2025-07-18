"use client";

import { cn } from "@/lib/utils";
import { FormationSection } from "@/types/formation";

interface FormationNavigationProps {
  sections: FormationSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function FormationNavigation({
  sections,
  activeSection,
  onSectionChange,
}: FormationNavigationProps) {
  return (
    <nav className="sticky top-8 bg-purple-bento rounded-2xl p-6 border border-ultraviolet-800/30 backdrop-blur-sm">
      <div className="space-y-2">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isLastItem = section.id === "postuler";

          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "w-full  text-left px-4 py-3 rounded-lg font-mansfield font-medium transition-all duration-300 relative group",
                isActive
                  ? "bg-ultraviolet-900 text-white shadow-lg shadow-ultraviolet-900/20"
                  : "text-gray-300 hover:text-white hover:bg-ultraviolet-800/50",
                isLastItem &&
                  "mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-700 hover:to-blue-700"
              )}
            >
              {/* Indicateur d'animation */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse" />
              )}

              {/* Numéro de section */}
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                    isActive
                      ? "bg-white text-purple-600"
                      : "bg-gray-600 text-gray-300 group-hover:bg-gray-500",
                    isLastItem && "bg-white text-purple-600"
                  )}
                >
                  {isLastItem ? "!" : index + 1}
                </span>

                <span className="text-sm">{section.title}</span>
              </div>

              {/* Effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-lg transition-all duration-300" />
            </button>
          );
        })}
      </div>

      {/* Decoration */}
      <div className="mt-6 pt-4 border-t border-ultraviolet-800/30">
        <div className="text-center">
          <div className="inline-block px-3 py-1 bg-ultraviolet-800/20 rounded-full">
            <span className="text-xs text-ultraviolet-700 font-mansfield">
              Formation CDA
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
