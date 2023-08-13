import { useState, useEffect } from "react";
import './style.css'
function App() {

  const [info, setInfo] = useState('');
  const name = 'Hii! My name is Ionathan and im a Frontend Developer'

  useEffect(()=>{
    let count = 0
    let timer = setInterval(() => {
      if (count < name.length - 1) {
        setInfo(prevInfo => prevInfo + name[count]);
        count++;
      } else {
        clearInterval(timer); // Stop the interval when the entire string is added.
      }
    }, 100);

    // in case that it gets unmound we have to clean the interval
    return () => {clearInterval(timer)}; 
  },[])

  return (
    <div>
        <header>
          <div className='logo'>Logo</div>
          <nav>
            <div>Home</div>
            <div>Skills</div>
            <div>Projects</div>
          </nav>
          <div className='social-links'>
            <a href='https://www.linkedin.com/in/ionathan-sideras-072a60255' target='_blank'><img src='../public/linkedin.svg'/></a>
            <a href='https://github.com/ionathansideras' target='_blank'><img src='../public/github.svg'/></a>
          </div>
        </header>
        <main>
          <div>
            <h1>{info}</h1>
          </div>
          <div className="astro-div">
            <img src="../public/astro.svg"/>  
          </div>
        </main>
    </div>
  )
}

export default App
