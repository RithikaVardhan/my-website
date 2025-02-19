import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/Me.jpg'
import HeaderSocial from './HeaderSocials' 

const header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h1 className="main-title">Welcome to My Portfolio</h1>
        <h5>Hello I'm</h5>
        <h1>Rithika Vardhan</h1>
        <h5 className="text-light-blue">a Software Engineer and a master's graduate from the Blekinge Institute of Technology in Sweden. </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="Me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header