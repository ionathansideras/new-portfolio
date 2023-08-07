import { useState } from 'react'
import './style.css'
function App() {

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
    </div>
  )
}

export default App
