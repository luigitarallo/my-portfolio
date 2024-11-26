import "./Navbar.css";

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
        <li>
          <button onClick={() => scrollToSection("home")}>home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>about</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("works")}>works</button>
        </li>
      </ul>
    </nav>
  );
}
