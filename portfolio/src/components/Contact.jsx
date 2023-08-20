import React from 'react'
import man from '../assets/contact-img.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export default function Contact() {
  return (
    <footer>
        <div className='img-div'>
            <img src={man}/>
        </div>
        <div className='contact-div'>
            <p>Ionathan Sideras</p>
            <p>iona8ansideras@gmail.com</p>
            <div className='contact'> 
                <a
                    href="https://www.linkedin.com/in/ionathan-sideras-072a60255"
                    target="_blank"
                >
                <img className='footer-img1' src={linkedin}/>
                </a>
                <a href="https://github.com/ionathansideras" target="_blank">
                <img className='footer-img2' src={github} />
                </a>
            </div>
        </div>
    </footer>
  )
}
