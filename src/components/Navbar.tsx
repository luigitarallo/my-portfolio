import "./Navbar.css";
import { NavLink } from "./NavLink";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const { activeSection, setActiveSectionManually } = useActiveSection();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      setActiveSectionManually(id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav>
      <ul>
        <NavLink
          label="Home"
          targetId="home"
          onClick={scrollToSection}
          isActive={activeSection === "home"}
        />
        <NavLink
          label="About"
          targetId="about"
          onClick={scrollToSection}
          isActive={activeSection === "about"}
        />
        <NavLink
          label="Works"
          targetId="works"
          onClick={scrollToSection}
          isActive={activeSection === "works"}
        />
      </ul>
    </nav>
  );
}
