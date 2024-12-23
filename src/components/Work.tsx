interface WorkProps {
  image: string;
  altText: string;
  demoLink: string;
  githubLink: string;
}

export function Work({ image, altText, demoLink, githubLink }: WorkProps) {
  return (
    <div className="project-col">
      <div className="project">
        <div className="image-container">
          <img src={image} alt={altText} />
        </div>
        <div className="buttons">
          <button
            className="demo-button"
            onClick={() => {
              window.open(demoLink, "_blank");
            }}
          >
            Demo
          </button>
          <button
            className="github-button"
            onClick={() => {
              window.open(githubLink, "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
