import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Works />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
