import "./Works.css";
import boolfixImg from "../assets/boolflix-screen.png";
import tictactoeImg from "../assets/tic-tac-toe-screen.png";
import porfolioImg from "../assets/portfolio-screen.png";

export function Works() {
  return (
    <section id="works" className="debug-1">
      <div className="container">
        <h2>Works</h2>
        <div className="projects-row debug-1">
          <div className="project-col">
            <div className="project">
              <div className="image-container">
                <img src={boolfixImg} alt="boolf ix preview" />
              </div>
              <div className="buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col">
            <div className="project">
              <div className="image-container">
                <img src={boolfixImg} alt="boolf ix preview" />
              </div>
              <div className="buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col debug">
            <div className="project">
              <div className="image-container">
                <img src={tictactoeImg} alt="boolf ix preview" />
              </div>
              <div className="buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
          </div>
          <div className="project-col debug">
            <div className="project">
              <div className="image-container">
                <img src={porfolioImg} alt="boolflix preview" />
              </div>
              <div className="buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
