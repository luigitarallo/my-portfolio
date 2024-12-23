import "./Works.css";
import { Work } from "./Work";
import boolfixImg from "../assets/boolflix-screen.png";
import tictactoeImg from "../assets/tic-tac-toe-screen.png";
import porfolioImg from "../assets/portfolio-screen.png";

export function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2>Works</h2>
        <div className="projects-row">
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
            image={tictactoeImg}
            altText="tic-tac-toe preview"
            demoLink="#"
            githubLink="#"
          />
          <Work
            image={porfolioImg}
            altText="portfolio preview"
            demoLink="#"
            githubLink="#"
          />
        </div>
      </div>
    </section>
  );
}
