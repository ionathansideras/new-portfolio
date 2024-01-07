import React from "react";
import { useState, useEffect } from "react";
import astro from "../assets/astro.svg";

export default function Interval() {
  // The text to be gradually revealed
  const text = "Hi! My name is Ionathan and i'm a Frontend Developer!";

  // State to store the gradually revealed text
  const [showText, setShowText] = useState("");
  const [count, setCount] = useState(0);

  // Effect to reveal text gradually
  useEffect(() => {
    // Set up an interval to add characters to the 'info' state
    let timer = setInterval(() => {
      if (count < text.length) {
        // Add the current character to the 'info' state
        setShowText((prevInfo) => prevInfo + text[count]);
        setCount(count + 1);
      } else {
        clearInterval(timer); // Stop the interval when the entire string is added.
      }
    }, 100); // Interval every 100ms

    // Clean up by clearing the interval when the component unmounts
    return () => clearInterval(timer);
  }, [count]); // Dependency on 'count', runs whenever 'count' changes

  return (
    <main>
      <div className="text-main">
        <div className="welcome">Welcome to my Portfolio</div>
        <div className="text-info">
          <h1>{showText}</h1>
          <div className="info">
            Welcome to my corner of the web! I'm a passionate front-end
            developer with a knack for turning lines of code into captivating
            user journeys.
          </div>
        </div>
      </div>
      <div className="astro-div">
        <img src={astro} />
      </div>
    </main>
  );
}
