import "./Works.css";
import boolfixImg from "../assets/boolflix-screen.png";
import tictactoeImg from "../assets/tic-tac-toe-screen.png";
import porfolioImg from "../assets/portfolio-screen.png";

export function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2>Works</h2>
        <div className="projects-row">
          <div className="project-col">
            <div className="project">
              <div className="image-container">
                <img src={boolfixImg} alt="boolflix preview" />
              </div>
              <div className="buttons">
                <button className="demo-button">Demo</button>
                <button className="github-button">GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col">
            <div className="project">
              <div className="image-container">
                <img src={tictactoeImg} alt="tic-tac-toe preview" />
              </div>
              <div className="buttons">
                <button className="demo-button">Demo</button>
                <button className="github-button">GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col ">
            <div className="project">
              <div className="image-container">
                <img src={tictactoeImg} alt="tic-tac-toe preview" />
              </div>
              <div className="buttons">
                <button className="demo-button">Demo</button>
                <button className="github-button">GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col ">
            <div className="project">
              <div className="image-container">
                <img src={porfolioImg} alt="portfolio preview" />
              </div>
              <div className="buttons">
                <button className="demo-button">Demo</button>
                <button className="github-button">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
