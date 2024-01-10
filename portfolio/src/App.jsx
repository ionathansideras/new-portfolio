// Import necessary dependencies
import React, { useRef, useEffect } from "react";
// Import styles
import "./styles/main.css";
import "./styles/skills-styles.css";
import "./styles/contact-styles.css";
import "./styles/header-styles.css";
import "./styles/projects-styles.css";
import "./styles/home-styles.css";
import "./styles/resume-styles.css";
// Import components
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// Define the App component
function App() {
  // Create refs for the skills, projects, resume, and content divs
  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const content = useRef(null);

  // Use the useEffect hook to set the opacity of the content div to 1 after the component mounts
  useEffect(() => {
    content.current.style.opacity = "1";
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the component
  return (
    <div className="all-content" ref={content}>
      <Header data={{ skills, projects, resume }} />
      <Home />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Resume resume={resume} />
      <Contact />
    </div>
  );
}

// Export the App component
export default App;