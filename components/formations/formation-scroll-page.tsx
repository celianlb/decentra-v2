"use client";

import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { FormationData } from "@/types/formation";
import { useEffect, useRef, useState } from "react";
import FormationHero from "./formation-hero";
import SectionContent from "./sections";

interface FormationScrollPageProps {
  formationData: FormationData;
}

// Icônes pour chaque section
const getSectionIcon = (sectionId: string) => {
  const icons = {
    presentation: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    rythme: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    duree: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    admission: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    rentree: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    diplome: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    tarif: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    debouche: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    programme: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
    processus: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    postuler: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };
  return icons[sectionId as keyof typeof icons] || icons.presentation;
};

export default function FormationScrollPage({
  formationData,
}: FormationScrollPageProps) {
  const { activeSection, registerSectionRef, scrollToSection } =
    useScrollNavigation({
      sections: formationData.sections,
    });

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [showRightPagination, setShowRightPagination] = useState(false);

  // Enregistrer les refs des sections
  useEffect(() => {
    sectionRefs.current.forEach((element, id) => {
      registerSectionRef(id, element);
    });
  }, [registerSectionRef]);

  // Gérer la visibilité de la pagination de droite
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Afficher la pagination après le hero
      const showAfterHero = scrollY > heroHeight * 0.8;

      // Cacher la pagination quand on approche du bas (350px avant la fin)
      const distanceFromBottom = documentHeight - scrollY - windowHeight;
      const hideNearBottom = distanceFromBottom < 350;

      setShowRightPagination(showAfterHero && !hideNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setSectionRef = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current.set(id, element);
      registerSectionRef(id, element);
    } else {
      sectionRefs.current.delete(id);
      registerSectionRef(id, null);
    }
  };

  const handleScrollToFirst = () => {
    scrollToSection(formationData.sections[0].id);
  };

  const handleMenuClick = (sectionId: string) => {
    const element = sectionRefs.current.get(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-dark to-purple-bento">
      {/* Grille de fond fixe */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        }}
      />

      {/* Indicateur de progression minimaliste à droite */}
      <div
        className={`fixed right-6 top-[40vh] z-50 transition-all duration-500 ${
          showRightPagination
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Ligne de progression */}
          <div className="relative w-0.5 h-32 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transition-all duration-300"
              style={{
                height: `${
                  ((formationData.sections.findIndex(
                    (s) => s.id === activeSection
                  ) +
                    1) /
                    formationData.sections.length) *
                  100
                }%`,
              }}
            />
          </div>

          {/* Indicateur de section actuelle */}
          <div className="bg-purple-bento/90 backdrop-blur-sm rounded-full px-3 py-1 border border-purple-500/30">
            <span className="text-xs font-mansfield text-purple-300">
              {formationData.sections.findIndex((s) => s.id === activeSection) +
                1}{" "}
              / {formationData.sections.length}
            </span>
          </div>

          {/* Points de navigation */}
          <div className="flex flex-col space-y-2">
            {formationData.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleMenuClick(section.id)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  activeSection === section.id
                    ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                title={section.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation mobile */}
      <div className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-purple-bento/90 backdrop-blur-sm rounded-xl p-4 border border-ultraviolet-800/30">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {formationData.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleMenuClick(section.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-mansfield transition-all duration-300 flex items-center gap-2 ${
                  activeSection === section.id
                    ? "bg-ultraviolet-900 text-white"
                    : "text-gray-300 hover:text-white hover:bg-ultraviolet-800/50"
                }`}
              >
                <div className="w-4 h-4">{getSectionIcon(section.id)}</div>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Hero - pleine largeur */}
      <FormationHero
        title={formationData.title}
        subtitle={formationData.subtitle}
        onScrollToFirst={handleScrollToFirst}
      />

      {/* Layout flex pour le contenu avec menu */}
      <div className="flex">
        {/* Menu de navigation fixe à gauche */}
        <div className="hidden lg:flex w-64 flex-col">
          <div className="sticky top-6 p-4">
            <div className="bg-purple-bento/90 backdrop-blur-sm rounded-2xl p-3 border border-ultraviolet-800/30">
              <div className="space-y-1">
                {formationData.sections.map((section) => {
                  const isActive = activeSection === section.id;
                  const isLastItem = section.id === "postuler";

                  return (
                    <button
                      key={section.id}
                      onClick={() => handleMenuClick(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-mansfield font-medium transition-all duration-300 relative group text-sm ${
                        isActive
                          ? "bg-ultraviolet-900 text-white shadow-lg shadow-ultraviolet-900/20"
                          : "text-gray-300 hover:text-white hover:bg-ultraviolet-800/50"
                      } ${
                        isLastItem &&
                        "mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-700 hover:to-blue-700"
                      }`}
                    >
                      {/* Indicateur d'animation */}
                      {isActive && (
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse" />
                      )}

                      {/* Contenu avec icône seulement */}
                      <div className="flex items-center gap-2">
                        {/* Icône stylée */}
                        <div
                          className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-gray-600/50 text-gray-300 group-hover:bg-gray-500/50 group-hover:text-white"
                          } ${isLastItem && "bg-white/20 text-white"}`}
                        >
                          {getSectionIcon(section.id)}
                        </div>

                        <span className="font-medium">{section.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Decoration */}
              <div className="mt-3 pt-2 border-t border-ultraviolet-800/30">
                <div className="text-center">
                  <div className="inline-block px-2 py-1 bg-ultraviolet-800/20 rounded-full">
                    <span className="text-xs text-ultraviolet-700 font-mansfield">
                      Formation CDA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal des sections */}
        <div className="flex-1 relative">
          {/* Sections de contenu */}
          <div className="px-4 md:px-12">
            {formationData.sections.map((section, index) => (
              <section
                key={section.id}
                ref={setSectionRef(section.id)}
                data-section-id={section.id}
                className="min-h-screen flex items-center justify-center py-16"
              >
                <div className="max-w-5xl mx-auto">
                  {/* En-tête de section */}
                  <div className="text-center mb-12">
                    <div className="flex gap-4 mb-6">
                      <span className="text-white font-bold text-2xl font-stara">
                        {section.id === "postuler" ? "!" : index + 1}
                      </span>
                      <div className="text-left">
                        <h2 className="text-[2rem]  font-bold text-white font-stara [text-shadow:_0px_0px_7px_rgb(255_255_255_/_0.7)]">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de section */}
                  <div className="relative">
                    <div className="bg-gray-900 rounded-4xl p-8 md:p-12 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden">
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full hover:translate-x-[-200%] transition-transform duration-1000" />

                      {/* Grille de points décorative */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundSize: "20px 20px",
                          backgroundImage:
                            "radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        }}
                      />

                      {/* Contenu React */}
                      <div className="relative z-10 font-mansfield">
                        <SectionContent sectionId={section.id} />
                      </div>
                    </div>
                  </div>

                  {/* Indicateur de progression */}
                </div>
              </section>
            ))}

            {/* Footer */}
            <footer className=" backdrop-blur-sm border-t border-ultraviolet-800/30 py-8">
              <div className="max-w-5xl mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="text-center md:text-left">
                    <p className="text-gray-300 font-mansfield text-sm">
                      Formation diplômante • Titre RNCP 31678 reconnu par
                      l&apos;État
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
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
