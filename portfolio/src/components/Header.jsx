import React, { useRef } from "react";
import { useEffect } from "react";
import { handleScrollY } from "../helpers/handleScroll.js";
import linkedin from "../assets/linkedin2.svg";
import github from "../assets/github2.svg";

export default function Header({ data }) {
  // ref to manage the header background color
  const backGround = useRef(null);

   // Effect to update header background based on scroll position
   useEffect(() => {
    const handleBackGround = () => {
      if (window.scrollY !== 0) {
        backGround.current.style.backgroundColor = "transparent"; // Change header background color on scroll
        backGround.current.style.backdropFilter = "blur(10px)"; // Apply blur effect
      } else {
        backGround.current.style.backgroundColor = "transparent"; // Set header background to transparent when at the top
        backGround.current.style.backdropFilter = "none"; // Remove blur effect
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleBackGround);

    // Clean up by removing the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleBackGround);
  }, []);

  return (
    <header ref={backGround}>
      <div className="logo">
        <p className="color-h">{"<"}</p>
        <p>Jonathan</p>
        <p className="color-h">{"/>"}</p>
      </div>
      <nav>
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Home
        </div>
        <div onClick={() => handleScrollY(data.skills.current, 150)}>
          Skills
        </div>
        <div onClick={() => handleScrollY(data.projects.current, 50)}>
          Projects
        </div>
      </nav>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ionathan-sideras-072a60255"
          target="_blank"
        >
          <img src={linkedin} />
        </a>
        <a href="https://github.com/ionathansideras" target="_blank">
          <img src={github} />
        </a>
      </div>
    </header>
  );
}
