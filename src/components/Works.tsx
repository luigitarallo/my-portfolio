import "./Works.css";
import { Work } from "./Work";
import boolfixImg from "../assets/boolflix-screen.png";
import tictactoeImg from "../assets/tic-tac-toe-screen.png";
import porfolioImg from "../assets/portfolio-screen.png";
import investmentCalculator from "../assets/investment-calculator.png";

export function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2>Works</h2>
        <div className="projects-row">
          <Work
            image={porfolioImg}
            altText="portfolio preview"
            demoLink="#"
            githubLink="https://github.com/luigitarallo/my-portfolio"
          />
          <Work
            image={boolfixImg}
            altText="boolflix preview"
            demoLink="https://vite-boolflix-olive.vercel.app/"
            githubLink="https://github.com/luigitarallo/vite-boolflix"
          />
          <Work
            image={tictactoeImg}
            altText="tic-tac-toe preview"
            demoLink="https://tic-tac-toe-react-course.vercel.app/"
            githubLink="https://github.com/luigitarallo/starting-project-tic-tac-toe"
          />
          <Work
            image={investmentCalculator}
            altText="investment calculator preview"
            demoLink="https://investment-calculator-khaki-eight.vercel.app/"
            githubLink="#"
          />
        </div>
      </div>
    </section>
  );
}
