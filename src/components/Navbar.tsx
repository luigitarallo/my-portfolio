import "./Navbar.css";
import { NavLink } from "./NavLink";

export function Navbar() {
  // function to go to a specific section when clicking nav links
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav>
      <ul>
        <NavLink label="Home" targetId="home" onClick={scrollToSection} />
        <NavLink label="About" targetId="about" onClick={scrollToSection} />
        <NavLink label="Works" targetId="works" onClick={scrollToSection} />
      </ul>
    </nav>
  );
}
