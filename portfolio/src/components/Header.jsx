import React, { useRef } from "react";
import { useEffect } from "react";

export default function Header() {
  
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

  // Function to smoothly scroll to a specified position
  const skroll = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <header ref={backGround}>
      <div className="logo">Logo</div>
      <nav>
        <div
          onClick={() => skroll(0)}
        >
          Home
        </div>
        <div
          onClick={() => skroll(500)}
        >
          Skills
        </div>
        <div
         onClick={() => skroll(1050)}
        >
          Projects
        </div>
      </nav>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ionathan-sideras-072a60255"
          target="_blank"
        >
          <img src="../public/linkedin.svg" />
        </a>
        <a href="https://github.com/ionathansideras" target="_blank">
          <img src="../public/github.svg" />
        </a>
      </div>
    </header>
  );
}
