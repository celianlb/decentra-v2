import { useCallback, useEffect, useState } from "react";

interface UseFormationNavigationProps {
  sections: Array<{ id: string; title: string }>;
  initialSection?: string;
}

export function useFormationNavigation({
  sections,
  initialSection,
}: UseFormationNavigationProps) {
  const [activeSection, setActiveSection] = useState(
    initialSection || sections[0]?.id || ""
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = useCallback(
    (sectionId: string) => {
      if (isTransitioning || activeSection === sectionId) return;

      setIsTransitioning(true);

      // Transition délicate pour les animations
      setTimeout(() => {
        setActiveSection(sectionId);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 50);
    },
    [activeSection, isTransitioning]
  );

  const getCurrentSectionIndex = useCallback(() => {
    return sections.findIndex((section) => section.id === activeSection);
  }, [sections, activeSection]);

  const goToNextSection = useCallback(() => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sections.length - 1) {
      handleSectionChange(sections[currentIndex + 1].id);
    }
  }, [sections, getCurrentSectionIndex, handleSectionChange]);

  const goToPreviousSection = useCallback(() => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      handleSectionChange(sections[currentIndex - 1].id);
    }
  }, [sections, getCurrentSectionIndex, handleSectionChange]);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        goToNextSection();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        goToPreviousSection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSection, goToPreviousSection]);

  return {
    activeSection,
    isTransitioning,
    handleSectionChange,
    goToNextSection,
    goToPreviousSection,
    getCurrentSectionIndex,
    canGoNext: getCurrentSectionIndex() < sections.length - 1,
    canGoPrevious: getCurrentSectionIndex() > 0,
  };
}
