// Import necessary dependencies
import React, { useEffect, useRef } from "react";
import { handleTransform } from "../helpers/handleTransform.js";
import useScrollEffect from "../hooks/useScrollEffect.jsx";
import projectData from "../data/projects.js";

// Define the Projects component
export default function Projects({ projects }) {
    // Create an array of refs for each project
    const projectsRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // Use the custom useScrollEffect hook to get the scroll count
    const { count } = useScrollEffect(projects, 5);

    // Use the useEffect hook to add scroll and load event listeners
    useEffect(() => {
        // Define the scroll event handler
        function handleScroll() {
            // For each project ref, check if it's visible
            projectsRefs.forEach((projectsRef, index) => {
                let visible = projectsRef.current.getBoundingClientRect().top;
                // If the project is visible, change its opacity and scale
                if (visible < window.innerHeight) {
                    projectsRef.current.style.opacity = "1";
                    projectsRef.current.style.transform = "scale(1)";
                }
            });
        }

        // Add the scroll and load event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    // Render the component
    return (
        <div>
            <summary ref={projects}>
                <h1 style={{ transform: handleTransform(1, 3, count) }}>
                    Projects
                </h1>
                <p style={{ transform: handleTransform(2, 4, count) }}>
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
                    {/* Map over the project data and render a div for each project */}
                    {projectData.map((project, index) => (
                        <div
                            className="container"
                            key={index}
                            ref={projectsRefs[index]}
                        >
                            <div>
                                <p>{project.title}</p>
                                <div className="links">
                                    <a
                                        target="_blank"
                                        href={project.projectLink}
                                    >
                                        Project
                                    </a>
                                    <a target="_blank" href={project.codeLink}>
                                        Code
                                    </a>
                                </div>
                            </div>
                            <img src={project.imageSrc} alt={project.title} />
                        </div>
                    ))}
                </div>
            </summary>
        </div>
    );
}
