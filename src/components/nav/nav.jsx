import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookReader} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href= "#" onClick={() => setActiveNav('#')} className= {activeNav ==='#'?'active': ''}><FaHome/></a>
      <a href= "#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ?'active':''}><BiUserCircle/></a>
      <a href= "#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ?'active':''}><BiBookReader/></a>
      <a href= "#contact"onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ?'active':''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav