import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatDotsFill/></a>
    </nav>
  )
}

export default Nav