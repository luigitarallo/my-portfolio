import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Configura l'Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Attiva quando la sezione è al centro dello schermo
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Se la sezione è visibile, aggiorna lo stato
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Osserva tutte le sezioni
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Funzione per impostare manualmente la sezione attiva (al click)
  const setActiveSectionManually = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return { activeSection, setActiveSectionManually };
}
