import React, { useRef, useEffect } from "react";
import "./styles/main.css";
import "./styles/skills-styles.css";
import "./styles/contact-styles.css";
import "./styles/header-styles.css";
import "./styles/projects-styles.css";
import "./styles/interval-styles.css";
import "./styles/resume-styles.css";
import Header from "./components/Header";
import Interval from "./components/Interval";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    content.current.style.opacity = "1";
  }, []);

  return (
    <div className="all-content" ref={content}>
      <Header data={{ skills, projects, resume }} />
      <Interval />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Resume resume={resume} />
      <Contact />
    </div>
  );
}

export default App;
