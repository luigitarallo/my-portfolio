import React, { useEffect, useState } from "react";
import "./Hero.css";
export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundPositionY: `${offsetY * 0.5}px`,
      }}
    >
      <div className="container">
        <div className="about-me">
          <h1>Hi there.</h1>
          <p>
            I’m<span> Luigi Tarallo </span> a
            <span> Full Stack Web Developer </span>
            passionate about<span> technology </span>
            and focused on building modern, efficient
            <span> web applications</span>.
          </p>
        </div>
      </div>
      <div className="arrow-box">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 10C20.9205 10 21.6667 10.7462 21.6667 11.6667L21.6667 24.3096L25.4882 20.4882C26.139 19.8373 27.1943 19.8373 27.8452 20.4882C28.496 21.139 28.496 22.1943 27.8452 22.8452L21.1785 29.5118C20.8659 29.8244 20.442 30 20 30C19.558 30 19.134 29.8244 18.8215 29.5118L12.1548 22.8452C11.5039 22.1943 11.5039 21.139 12.1548 20.4882C12.8057 19.8373 13.861 19.8373 14.5118 20.4882L18.3333 24.3096L18.3333 11.6667C18.3333 10.7462 19.0795 10 20 10Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
    </section>
  );
}
