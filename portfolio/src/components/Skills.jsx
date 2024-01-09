import React from "react";
import { useRef} from "react";
import js from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import css from "../assets/css-icon.svg";
import html from "../assets/html-icon.svg";
import vitest from "../assets/vitest.svg";
import firebase from "../assets/firebase-icon.svg";
import redux from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import cypress from "../assets/cypress.svg";
import vite from "../assets/vite.svg";
import jest from "../assets/jest.svg";
import webpack from "../assets/webpack.svg";
import useScrollEffect from "../hooks/useScrollEffect.jsx";

export default function Carousel({ skills }) {
  // Declare a ref variable 'carousel'
  const carousel = useRef(null);

  const {count} = useScrollEffect(skills, 6);

  return (
    <div ref={skills}>
      <article>
        <div className="skills-div">
          <div className="skills-1">
            <div>
              <h1>Tech Stack</h1>
              <div className="carousel">
                <section ref={carousel}>
                  <div
                    style={{ transform: count >= 1 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={reactIcon} />
                    <p>React</p>
                  </div>
                  <div
                    style={{ transform: count >= 2 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={js} />
                    <p>JavaScript</p>
                  </div>
                  <div
                    style={{ transform: count >= 3 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={sass} />
                    <p>Sass</p>
                  </div>
                  <div
                    style={{ transform: count >= 4 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={css} />
                    <p>Css</p>
                  </div>
                  <div
                    style={{ transform: count >= 5 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={html} />
                    <p>Html</p>
                  </div>
                  <div
                    style={{ transform: count >= 6 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={redux} />
                    <p>Redux</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="skills-2">
            <div className="tools">
              <h1>Tools</h1>
              <div className="carousel">
                <section>
                  <div
                    style={{ transform: count >= 1 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={firebase} />
                    <p>Firebase</p>
                  </div>
                  <div
                    style={{ transform: count >= 4 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={vite} />
                    <p>Vite</p>
                  </div>
                  <div
                    style={{ transform: count >= 2 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={webpack} />
                    <p>Webpack</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="testing">
              <h1>Testing</h1>
              <div className="carousel">
                <section>
                  <div
                    style={{ transform: count >= 1 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={cypress} />
                    <p>Cypress</p>
                  </div>
                  <div
                    style={{ transform: count >= 3 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={jest} />
                    <p>Jest</p>
                  </div>
                  <div
                    style={{ transform: count >= 1 ? "scale(1)" : "scale(0)" }}
                  >
                    <img src={vitest} />
                    <p>Vitest</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
