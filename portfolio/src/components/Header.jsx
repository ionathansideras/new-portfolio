import React from "react";
import { useState, useEffect } from "react";

export default function Header() {
  
  // State to manage the header background color
  const [headerBackground, setHeaderBackground] = useState("transparent");

  // Effect to update header background based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setHeaderBackground("rgb(17, 16, 16)"); // Change header background color on scroll
      } else {
        setHeaderBackground("transparent"); // Set header background to transparent when at the top
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
    <header style={{ backgroundColor: headerBackground }}>
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
