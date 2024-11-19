import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
