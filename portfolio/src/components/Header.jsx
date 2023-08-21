import React, { useRef } from "react";
import { useEffect } from "react";
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

export default function Header({data}) {
  
  // ref to manage the header background color
  const backGround = useRef(null);
  // Effect to update header background based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        backGround.current.style.backgroundColor = "rgb(17, 16, 16)"; // Change header background color on scroll
      } else {
        backGround.current.style.backgroundColor = "transparent"; // Set header background to transparent when at the top
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={backGround}>
      <div className="logo">
        <p className="color-h">{'<'}</p>
        <p>Jonathan</p>
        <p className="color-h">{"/>"}</p>
      </div>
      <nav>
        <div
          onClick={() =>
            window.scrollTo({
            top: 0,
            behavior: "smooth",
          })}
        >
          Home
        </div>
        <div
          onClick={() => data.dataCaousel.current?.scrollIntoView({ behavior: 'smooth'})}
        >
          Skills
        </div>
        <div
         onClick={() => data.dataProjects.current?.scrollIntoView({ behavior: 'smooth'})}
        >
          Projects
        </div>
      </nav>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ionathan-sideras-072a60255"
          target="_blank"
        >
          <img src={linkedin}/>
        </a>
        <a href="https://github.com/ionathansideras" target="_blank">
          <img src={github} />
        </a>
      </div>
    </header>
  );
}
