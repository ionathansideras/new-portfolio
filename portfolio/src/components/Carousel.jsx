import React from 'react'
import { useRef } from "react";


export default function Carousel() {

  const carousel = useRef(null);

  return (
    <div>
      <article>
        <div className="skills-div">
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aperiam culpa ratione quod eveniet mollitia nulla. Eos laborum,
            deserunt
          </p>
          <div className="carousel">
            <h2
              className="arrow"
              onClick={() => {
                carousel.current.scroll({
                  left: carousel.current.scrollLeft - 130,
                  behavior: "smooth",
                });
              }}
            >
              {"<"}
            </h2>
            <section ref={carousel}>
              <div>
                <img src="../public/javascript.svg" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src="../public/react.svg" />
                <p>React</p>
              </div>
              <div>
                <img src="../public/css-icon.svg" />
                <p>Css</p>
              </div>
              <div>
                <img src="../public/html-icon.svg" />
                <p>Html</p>
              </div>
              <div>
                <img src="../public/git-icon.svg" />
                <p>Git</p>
              </div>
              <div>
                <img src="../public/npm.svg" />
                <p>Npm</p>
              </div>
              <div>
                <img src="../public/webpack.svg" />
                <p>WebPack</p>
              </div>
              <div>
                <img src="../public/github-skills.svg" />
                <p>GitHub</p>
              </div>
              <div>
                <img src="../public/firebase-icon.svg" />
                <p>Firebase</p>
              </div>
            </section>
            <h2
              className="arrow"
              onClick={() => {
                carousel.current.scroll({
                  left: carousel.current.scrollLeft + 130,
                  behavior: "smooth",
                });
              }}
            >
              {">"}
            </h2>
          </div>
        </div>
      </article>
    </div>
  )
}
