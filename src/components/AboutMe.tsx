import "./AboutMe.css";
import { aboutContent } from "../data/content";
import IconLine from "./IconLine";

export function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-text">
          <h2>{aboutContent.heading}</h2>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            ></p>
          ))}
        </div>
        <div className="tech-stack">
          <h2>Tech stack</h2>
          <IconLine type="frontend" />
          <IconLine type="backend" />
          <IconLine type="tools" />
        </div>
      </div>
    </section>
  );
}
