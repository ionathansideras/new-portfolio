import React, { useEffect, useRef } from "react";
import man from "../assets/contact-img.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin2.svg";

// Defining the Contact functional component.
export default function Contact() {
  // Creating a reference using the useRef hook to access the icon image element.
  const icon = useRef(null);

  // Adding an effect that runs after the component has rendered.
  useEffect(() => {
    // Defining a function to handle scroll events.
    const handleTranfom = () => {
      // Getting the position of the icon image relative to the viewport.
      let position = icon.current.getBoundingClientRect();

      // Checking if the icon is within the viewport.
      if (
        position.top >= 0 &&
        position.left >= 0 &&
        position.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        position.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        // If the icon is in the viewport, increasing its width.
        icon.current.style.transform = "scale(1)";
        // Removing the scroll event listener since the desired condition is met.
        window.removeEventListener("scroll", handleTranfom);
      }
    };

    window.addEventListener("scroll", handleTranfom); // Add scroll event listener
    window.addEventListener("load", handleTranfom); // Add load event listener

    return () => {
      // Removing the scroll event listener when the page unmounts
      window.removeEventListener("scroll", handleTranfom);
      window.removeEventListener("load", handleTranfom);
    };
  }, []);

  return (
    <footer>
      <div className="img-div">
        <img src={man} ref={icon} />
      </div>
      <div className="contact-div">
        <p>Ionathan Sideras</p>
        <p>iona8ansideras@gmail.com</p>
        <div className="contact">
          <a
            href="www.linkedin.com/in/ionathan-sideras-072a60255"
            target="_blank"
          >
            <img className="footer-img1" src={linkedin} />
          </a>
          <a href="https://github.com/ionathansideras" target="_blank">
            <img className="footer-img2" src={github} />
          </a>
        </div>
      </div>
    </footer>
  );
}
