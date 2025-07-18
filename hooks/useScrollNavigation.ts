import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollNavigationProps {
  sections: Array<{ id: string; title: string }>;
  rootMargin?: string;
}

export function useScrollNavigation({
  sections,
  rootMargin = "-20% 0px -80% 0px",
}: UseScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Fonction pour enregistrer une ref de section
  const registerSectionRef = useCallback(
    (id: string, element: HTMLElement | null) => {
      if (element) {
        sectionRefs.current.set(id, element);
        // Observer immédiatement le nouvel élément
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      } else {
        const existingElement = sectionRefs.current.get(id);
        if (existingElement && observerRef.current) {
          observerRef.current.unobserve(existingElement);
        }
        sectionRefs.current.delete(id);
      }
    },
    []
  );

  // Fonction pour scroller vers une section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current.get(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset isScrolling après l'animation
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, []);

  // Intersection Observer pour détecter les sections visibles
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Ne pas mettre à jour pendant le scroll programmatique
        if (isScrolling) return;

        // Trouver la section la plus visible
        let maxRatio = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            const sectionId = entry.target.getAttribute("data-section-id");
            if (sectionId) {
              maxRatio = entry.intersectionRatio;
              mostVisibleSection = sectionId;
            }
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observer toutes les sections existantes
    sectionRefs.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling, rootMargin]);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        if (currentIndex < sections.length - 1) {
          scrollToSection(sections[currentIndex + 1].id);
        }
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentIndex > 0) {
          scrollToSection(sections[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, sections, scrollToSection]);

  return {
    activeSection,
    isScrolling,
    registerSectionRef,
    scrollToSection,
  };
}
