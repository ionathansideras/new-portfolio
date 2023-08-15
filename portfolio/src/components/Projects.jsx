import React from 'react'

export default function Projects() {
  return (
    <div>
      <summary>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          repellendus assumenda explicabo deserunt amet autem, ex minus nobis
          minima, illum dicta, asperiores perferendis delectus ullam voluptatem
          sequi corrupti consequatur numquam?
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
              <img src="../public/cart.jpg" />
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
              <img src="../public/crypto.jpg" />
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
              <img src="../public/chat.jpg" />
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
              <img src="../public/todo2.jpg" />
            </div>
          </div>

        </div>
      </summary>
    </div>
  )
}
