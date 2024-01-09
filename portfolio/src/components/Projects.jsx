import React, { useEffect, useState, useRef } from "react";
import cart from "../assets/cart-final2.png";
import crypto from "../assets/crypto-final2.png";
import todo from "../assets/todos-final2.png";
import chat from "../assets/chat-final2.png";
import { handleTransform } from "../helpers/handleTransform.js";
import useScrollEffect from "../hooks/useScrollEffect.jsx";

export default function Projects({ projects }) {
    const [count, setCount] = useState(0);

    // Refs for each project section
    const projectsRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    useScrollEffect(projects, setCount, 5);
    
    useEffect(() => {
        // Function to handle scroll events
        function handleScroll() {
            projectsRefs.forEach((projectsRef, index) => {
                let visible = projectsRef.current.getBoundingClientRect().top;
                // Adjust styling based on visibility
                if (visible < window.innerHeight) {
                    projectsRef.current.style.opacity = "1";
                    projectsRef.current.style.transform = "scale(1)";
                }
            });
        }

        // Attach scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Detach scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div>
            <summary ref={projects}>
                <h1 style={{ transform: handleTransform(1, 3, count) }}>
                    Projects
                </h1>
                <p
                    style={{
                        transform: handleTransform(2, 4, count),
                    }}
                >
                    Welcome to my projects section, where I'm excited to share
                    the journey of growth as a Front-end developer. These
                    projects are a reflection of my hands-on learning and
                    passion for creating web interfaces. As I continue to hone
                    my skills in HTML, CSS, JavaScript and React, each project
                    becomes a stepping stone in my progress. Feel free to
                    explore them every click and line of code is a part of my
                    learning story.
                </p>
                <div className="projects">
                    <div className="container" ref={projectsRefs[0]}>
                        <div>
                            <p>Crypto website</p>
                            <div className="links">
                                <a
                                    target="_blank"
                                    href="https://ionathansideras.github.io/my-cryptos/"
                                >
                                    Project
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/ionathansideras/my-cryptos"
                                >
                                    code
                                </a>
                            </div>
                        </div>
                        <img src={crypto} />
                    </div>

                    <div className="container" ref={projectsRefs[1]}>
                        <div>
                            <p>ToDo website</p>
                            <div className="links">
                                <a
                                    target="_blank"
                                    href="https://ionathansideras.github.io/my-todos/"
                                >
                                    Project
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/ionathansideras/my-todos"
                                >
                                    code
                                </a>
                            </div>
                        </div>
                        <img src={todo} />
                    </div>

                    <div className="container" ref={projectsRefs[2]}>
                        <div>
                            <p>Chat App website</p>
                            <div className="links">
                                <a
                                    target="_blank"
                                    href="https://ionathansideras.github.io/demo/"
                                >
                                    Project
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/ionathansideras/demo"
                                >
                                    code
                                </a>
                            </div>
                        </div>
                        <img src={chat} />
                    </div>

                    <div className="container" ref={projectsRefs[3]}>
                        <div>
                            <p>Shopping Cart website</p>
                            <div className="links">
                                <a
                                    target="_blank"
                                    href="https://ionathansideras.github.io/cart/"
                                >
                                    Project
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/ionathansideras/cart/tree/main"
                                >
                                    code
                                </a>
                            </div>
                        </div>
                        <img src={cart} />
                    </div>
                </div>
            </summary>
        </div>
    );
}
