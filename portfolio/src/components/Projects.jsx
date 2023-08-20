import React, { useEffect, useRef } from 'react'
import cart from '../assets/cart.jpg'
import crypto from '../assets/crypto.jpg'
import todo from '../assets/todo2.jpg'
import chat from '../assets/chat.jpg'

export default function Projects({onDataProjects}) {

  const data = useRef(null)

  useEffect(()=>{
    onDataProjects(data)
  },[])

  return (
    <div>
      <summary ref={data}>
        <h1>Projects</h1>
        <p>
        Welcome to my projects section, where I'm excited to share the journey
         of growth as a Front-end developer. These projects are a reflection
          of my hands-on learning and passion for creating web interfaces. As I continue
           to hone my skills in HTML, CSS, JavaScript and React, each project becomes a stepping
            stone in my progress. Feel free to explore them every
              click and line of code is a part of my learning story.

        </p>
        <div className="projects">

          <div className='conteiner'>
            <div className='group'>
              <div className='cover'>
                <p>Shopping Cart website</p>
                <div>
                  <a target="_blank" href="https://ionathansideras.github.io/cart/">Project</a>
                  <a target="_blank" href="https://github.com/ionathansideras/cart/tree/main">code</a>
                </div>
              </div>
              <img src={cart} />
            </div>
          </div>

          <div className='conteiner'>
            <div  className='group'>
              <div className='cover'>
                <p>Crypto website</p>
                <div>
                  <a target="_blank" href="https://ionathansideras.github.io/crypto/">Project</a>
                  <a target="_blank" href="https://github.com/ionathansideras/crypto/tree/master">code</a>
                </div>
              </div>
              <img src={crypto} />
            </div>
          </div>

          <div className='conteiner'>
            <div className='group'>
              <div className='cover'>
                <p>Chat App website</p>
                <div>
                  <a target="_blank" href="https://ionathansideras.github.io/demo/">Project</a>
                  <a target="_blank" href="https://github.com/ionathansideras/demo">code</a>
                </div>
              </div>
              <img src={chat} />
            </div>
          </div>

          <div className='conteiner'>
            <div className='group'>
              <div className='cover'>
                <p>ToDo website</p>
                <div>
                  <a target="_blank" href="https://ionathansideras.github.io/todo/">Project</a>
                  <a target="_blank" href="https://github.com/ionathansideras/todo/tree/main/todo">code</a>
                </div>
              </div>
              <img src={todo} />
            </div>
          </div>

        </div>
      </summary>
    </div>
  )
}
