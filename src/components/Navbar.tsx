import "./Navbar.css";

export function Navbar() {
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
