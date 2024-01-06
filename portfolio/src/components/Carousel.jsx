import React from "react";
import { useRef, useState, useEffect } from "react";
import { handleScrollX } from "../helpers/handleScroll";
import js from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import css from "../assets/css-icon.svg";
import html from "../assets/html-icon.svg";
import git from "../assets/git-icon.svg";
import npm from "../assets/npm.svg";
import github from "../assets/github-skills.svg";
import firebase from "../assets/firebase-icon.svg";
import webpack from "../assets/webpack.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import cypress from "../assets/cypress.svg";
import vite from "../assets/vite.svg";
import jest from "../assets/jest.svg";

export default function Carousel({ skills }) {
  // Declare a ref variable 'carousel'
  const carousel = useRef(null);
  // Declare a state variable 'locked' with its setter function 'setLocked'.
  const [locked, setLocked] = useState(false);

  // Use the 'useEffect' hook to perform side effects.
  useEffect(() => {
    // If 'locked' is false, exit the effect without doing anything.
    if (!locked) return;
    // If 'locked' is true, set up an interval.
    const handleLocked = setInterval(() => {
      // Inside the interval, set 'locked' to false.
      setLocked(false);
      // Also inside the interval, clear the interval itself.
      // This means the interval will only run once, 300 milliseconds after 'locked' is set to true.
      clearInterval(handleLocked);
    }, 300);
  }, [locked]);

  return (
    <div ref={skills}>
      <article>
        <div className="skills-div">
          <h1>Skills</h1>
          <p>
            This is a carousel with some of the tools that i'm experienced with
            and work with in daily basis
          </p>
          <div className="carousel">
            <h2
              className="arrow"
              onClick={() => {
                if (locked) return;
                handleScrollX(carousel.current, -130);
                setLocked(true);
              }}
            >
              {"<"}
            </h2>
            <section ref={carousel}>
              <div>
                <img src={reactIcon} />
                <p>React</p>
              </div>
              <div>
                <img src={js} />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={redux} />
                <p>Redux</p>
              </div>
              <div>
                <img src={sass} />
                <p>Sass</p>
              </div>
              <div>
                <img src={css} />
                <p>Css</p>
              </div>
              <div>
                <img src={html} />
                <p>Html</p>
              </div>
              <div>
                <img src={cypress} />
                <p>Cypress</p>
              </div>
              <div>
                <img src={git} />
                <p>Git</p>
              </div>
              <div>
                <img src={npm} />
                <p>Npm</p>
              </div>
              <div>
                <img src={vite} />
                <p>Vite</p>
              </div>
              <div>
                <img src={webpack} />
                <p>WebPack</p>
              </div>
              <div>
                <img src={github} />
                <p>GitHub</p>
              </div>
              <div>
                <img src={firebase} />
                <p>Firebase</p>
              </div>
              <div>
                <img src={jest} />
                <p>Jest</p>
              </div>
            </section>
            <h2
              className="arrow"
              onClick={() => {
                if (locked) return;
                handleScrollX(carousel.current, 130);
                setLocked(true);
              }}
            >
              {">"}
            </h2>
          </div>
        </div>
      </article>
    </div>
  );
}
