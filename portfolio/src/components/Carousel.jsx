import React, { useState } from 'react'
import { useRef } from "react";
import js from '../assets/javascript.svg'
import reactIcon from '../assets/react.svg'
import css from '../assets/css-icon.svg'
import html from '../assets/html-icon.svg'
import git from '../assets/git-icon.svg'
import npm from '../assets/npm.svg'
import github from '../assets/github-skills.svg'
import firebase from '../assets/firebase-icon.svg'
import webpack from '../assets/webpack.svg'

export default function Carousel({onDataCarousel}) {

  const carousel = useRef(null);
  const skills = useRef(null);

  useState(()=>{
    onDataCarousel(skills)
  },[])

  return (
    <div>
      <article ref={skills}>
        <div className="skills-div">
          <h1>Skills</h1>
          <p>
            This is a carousel with some of the tools that i'm experienced with and work with in daily basis
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
                <img src={js} />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={reactIcon} />
                <p>React</p>
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
                <img src={git} />
                <p>Git</p>
              </div>
              <div>
                <img src={npm} />
                <p>Npm</p>
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
