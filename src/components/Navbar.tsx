import { useEffect, useState } from "react";
import "./Navbar.css";

export function Navbar() {
  // useState to check light section
  const [isLightSection, setIsLightSection] = useState(false);

  // useEffect to create an IntersectionObserver instance
  // that will watch the lightSection "Works"
  // and change the isLightSection value
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lightSection = entries[0];
        setIsLightSection(lightSection.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const lightSectionElement = document.getElementById("works");
    if (lightSectionElement) {
      observer.observe(lightSectionElement);
    }
    return () => observer.disconnect();
  }, []);

  // function to go to a specific section when clicking nav links
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <button
            className={isLightSection ? "text-dark" : "text-light"}
            onClick={() => scrollToSection("home")}
          >
            home
          </button>
        </li>
        <li>
          <button
            className={isLightSection ? "text-dark" : "text-light"}
            onClick={() => scrollToSection("about")}
          >
            about
          </button>
        </li>
        <li>
          <button
            className={isLightSection ? "text-dark" : "text-light"}
            onClick={() => scrollToSection("works")}
          >
            works
          </button>
        </li>
      </ul>
    </nav>
  );
}
