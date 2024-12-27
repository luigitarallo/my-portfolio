import React from "react";
import { frontendIcons, backendIcons, tools } from "../data/icons";

type IconType = "frontend" | "backend" | "tools";

const iconsMap = {
  frontend: frontendIcons,
  backend: backendIcons,
  tools: tools,
};

interface IconLineProps {
  type: IconType;
}

const IconLine: React.FC<IconLineProps> = ({ type }) => {
  const icons = iconsMap[type];

  return (
    <div className="stack-type">
      <div className="tech-line">
        <div className="line-point"></div>
        <div className="line"></div>
        <h3>{type}</h3>
      </div>
      <div className="tech-icons">
        <ul>
          {Object.entries(icons).map(([key, svg]) => (
            <li key={key} dangerouslySetInnerHTML={{ __html: svg }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLine;
