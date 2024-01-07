import React, {useRef } from "react";
import "./styles/main.css";
import "./styles/skills-styles.css";
import "./styles/contact-styles.css";
import "./styles/header-styles.css";
import "./styles/projects-styles.css";
import "./styles/interval-styles.css";
import Header from "./components/Header";
import Interval from "./components/Interval";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact";

function App() {
  const skills = useRef(null);
  const projects = useRef(null);

  return (
    <div>
      <Header data={{skills, projects}}/>
      <Interval />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
    </div>
  );
}

export default App;
