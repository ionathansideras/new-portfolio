import { useState, useEffect, useRef } from "react";
import './style.css'
function App() {

  const [info, setInfo] = useState('');
  const name = 'Hii! My name is Ionathan and im a Frontend Developer!';
  const carousel = useRef(null)
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const skills = useRef(null)

  useEffect(()=>{
    let count = 0
    let srkoll = 0
    let timer = setInterval(() => {
      if (count < name.length - 1) {
        setInfo(prevInfo => prevInfo + name[count]);
        count++;
      } else {
        clearInterval(timer); // Stop the interval when the entire string is added.
      }
    }, 100);

    const handleScroll = () => {
      if (window.scrollY !== 0){
        setHeaderBackground('rgb(17, 16, 16)');
      } else {
        setHeaderBackground('transparent')
      }
    };

    window.addEventListener('scroll', handleScroll);
    // in case that it gets unmound we have to clean the interval
    return () => {clearInterval(timer),window.removeEventListener('scroll', handleScroll);}; 
  },[])
  
  return (
    <div>
        <header style={{backgroundColor: headerBackground}}>
          <div className='logo'>Logo</div>
          <nav>
            <div onClick ={()=> {
                window.scroll({
                  top: window.scrollY = 0,
                  behavior: "smooth",
            })}}>Home</div>
            <div onClick={()=>{
              skills.current.scrollIntoView({ behavior: 'smooth' });
            }}>Skills</div>
            
            <div>Projects</div>
          </nav>
          <div className='social-links'>
            <a href='https://www.linkedin.com/in/ionathan-sideras-072a60255' target='_blank'><img src='../public/linkedin.svg'/></a>
            <a href='https://github.com/ionathansideras' target='_blank'><img src='../public/github.svg'/></a>
          </div>
        </header>
        <main>
          <div>
            <div className="welcome">Welcome to my Portfolio</div>
            <h1>{info}</h1>
            <div className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odit quia quod repellat, recusandae fuga eligendi modi cumque minus doloremque perspiciatis at asperiores natus quae, deleniti blanditiis consequuntur voluptatum. Ipsa.</div>
          </div>
          <div className="astro-div">
            <img src="../public/astro.svg"/>  
          </div>
        </main>
        <article>
          <div className="skills-div" ref={skills}>
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam culpa ratione quod eveniet mollitia nulla. Eos laborum, deserunt</p>
            <div className="carousel">
              <h2 className="arrow" onClick ={()=> {
                carousel.current.scroll({
                  left: carousel.current.scrollLeft - 130,
                  behavior: "smooth",
                })}}>{'<'}</h2>
              <section ref={carousel}>
                <div>
                  <img src="../public/javascript.svg"/>
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src="../public/react.svg"/>
                  <p>React</p>
                </div>
                <div>
                  <img src="../public/css-icon.svg"/>
                  <p>Css</p>
                </div>
                <div>
                  <img src="../public/html-icon.svg"/>
                  <p>Html</p>
                </div>
                <div>
                  <img src="../public/git-icon.svg"/>
                  <p>Git</p>
                </div>
                <div>
                  <img src="../public/npm.svg"/>
                  <p>Npm</p>
                </div>
                <div>
                  <img src="../public/webpack.svg"/>
                  <p>WebPack</p>
                </div>
                <div>
                  <img src="../public/github-skills.svg"/>
                  <p>GitHub</p>
                </div>
              </section>
              <h2 className="arrow" onClick={()=> {
                carousel.current.scroll({
                  left: carousel.current.scrollLeft + 130,
                  behavior: "smooth",
                });
              }}>{'>'}</h2>
            </div>
            
          </div>
        </article>
    </div>
  )
}

export default App
