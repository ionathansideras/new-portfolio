import React from "react";
import { useRef } from "react";
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
import useScrollEffect from "../hooks/useScrollEffect.jsx";
import typescript from "../assets/typescript.svg";

export default function Carousel({ skills }) {
    // Declare a ref variable 'carousel'
    const carousel = useRef(null);

    const { count } = useScrollEffect(skills, 6);

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
                                        style={{
                                            transform:
                                                count >= 1
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={reactIcon}
                                            alt="React-icon"
                                            loading="lazy"
                                        />
                                        <p>React</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 2
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={js}
                                            alt="JavaScript-icon"
                                            loading="lazy"
                                        />
                                        <p>JavaScript</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 3
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={typescript}
                                            alt="TypeScript-icon"
                                            loading="lazy"
                                        />
                                        <p>TypeScript</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 4
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={sass}
                                            alt="Sass-icon"
                                            loading="lazy"
                                        />
                                        <p>Sass</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 5
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={css}
                                            alt="Css-icon"
                                            loading="lazy"
                                        />
                                        <p>Css</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 6
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={html}
                                            alt="Html-icon"
                                            loading="lazy"
                                        />
                                        <p>Html</p>
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
                                        style={{
                                            transform:
                                                count >= 1
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={firebase}
                                            alt="Firebase-icon"
                                            loading="lazy"
                                        />
                                        <p>Firebase</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 4
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={vite}
                                            alt="Vite-icon"
                                            loading="lazy"
                                        />
                                        <p>Vite</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 2
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={redux}
                                            alt="Redux-icon"
                                            loading="lazy"
                                        />
                                        <p>Redux</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="testing">
                            <h1>Testing</h1>
                            <div className="carousel">
                                <section>
                                    <div
                                        style={{
                                            transform:
                                                count >= 1
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={cypress}
                                            alt="Cypress-icon"
                                            loading="lazy"
                                        />
                                        <p>Cypress</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 3
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={jest}
                                            alt="Jest-icon"
                                            loading="lazy"
                                        />
                                        <p>Jest</p>
                                    </div>
                                    <div
                                        style={{
                                            transform:
                                                count >= 1
                                                    ? "scale(1)"
                                                    : "scale(0)",
                                        }}
                                    >
                                        <img
                                            src={vitest}
                                            alt="Vitest-icon"
                                            loading="lazy"
                                        />
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
