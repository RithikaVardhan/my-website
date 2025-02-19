import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md' // Import Gmail Icon

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rithika-vardhan-58b61220b" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/RithikaVardhan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:rithikavardhan7@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail />
        </a>
    </div>
  )
}

export default HeaderSocials
