"use client";

import { useFormationNavigation } from "@/hooks/useFormationNavigation";
import { FormationData } from "@/types/formation";
import FormationContent from "./formation-content";
import FormationNavigation from "./formation-navigation";

interface FormationDashboardProps {
  formationData: FormationData;
}

export default function FormationDashboard({
  formationData,
}: FormationDashboardProps) {
  const {
    activeSection,
    isTransitioning,
    handleSectionChange,
    canGoNext,
    canGoPrevious,
    goToNextSection,
    goToPreviousSection,
  } = useFormationNavigation({
    sections: formationData.sections,
    initialSection: formationData.sections[0]?.id,
  });

  const currentSection = formationData.sections.find(
    (section) => section.id === activeSection
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-dark to-purple-bento relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ultraviolet-900/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10">
        {/* En-tête */}
        <div className="border-b border-ultraviolet-800/30 bg-dark-purple/80 backdrop-blur-sm">
          <div className="mx-4 md:mx-12 py-8">
            <div className="flex flex-col gap-2">
              <span className="text-ultraviolet-900 text-sm font-mansfield bg-ultraviolet-700/80 py-1 px-3 rounded-full w-fit">
                formation
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-stara">
                {formationData.title}
              </h1>
              <p className="text-gray-300 font-mansfield text-lg max-w-2xl">
                {formationData.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="mx-4 md:mx-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation - Sidebar */}
            <div className="lg:col-span-1">
              <FormationNavigation
                sections={formationData.sections}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-3">
              {currentSection && (
                <FormationContent
                  section={currentSection}
                  isActive={activeSection === currentSection.id}
                />
              )}

              {/* Boutons de navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-ultraviolet-800/30">
                <button
                  onClick={goToPreviousSection}
                  disabled={!canGoPrevious || isTransitioning}
                  className="flex items-center gap-2 px-4 py-2 bg-ultraviolet-800/30 rounded-lg text-gray-300 hover:text-white hover:bg-ultraviolet-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-mansfield"
                >
                  <span>←</span>
                  Précédent
                </button>

                <div className="text-center text-sm text-gray-400 font-mansfield">
                  Utilisez les flèches du clavier pour naviguer
                </div>

                <button
                  onClick={goToNextSection}
                  disabled={!canGoNext || isTransitioning}
                  className="flex items-center gap-2 px-4 py-2 bg-ultraviolet-800/30 rounded-lg text-gray-300 hover:text-white hover:bg-ultraviolet-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-mansfield"
                >
                  Suivant
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de la page */}
        <div className="border-t border-ultraviolet-800/30 bg-dark-purple/80 backdrop-blur-sm">
          <div className="mx-4 md:mx-12 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="text-center md:text-left">
                <p className="text-gray-300 font-mansfield text-sm">
                  Formation diplômante • Titre RNCP reconnu par l&apos;État
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300 font-mansfield">
                    Inscriptions ouvertes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
