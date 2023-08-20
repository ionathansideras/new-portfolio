import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import Interval from "./components/Interval";
import Carousel from "./components/Carousel";
import Projects from './components/Projects';

function App() {

  const [dataCaousel, setDataCarousel] = useState('');
  const [dataProjects, setDataprojects] = useState('')
  
  return (
    <div>
      <Header data={{dataCaousel, dataProjects}}/>
      <Interval />
      <Carousel onDataCarousel={setDataCarousel}/>
      <Projects onDataProjects={setDataprojects}/>
    </div>
  );
}

export default App;
