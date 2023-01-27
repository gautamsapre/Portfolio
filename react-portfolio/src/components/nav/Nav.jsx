import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
const Nav = () => {
  return (
    <nav>
      <a href="#header"><FiHome/></a>
      <a href="#about"><BsFillPersonFill/></a>
      <a href="#experience"><MdWork/></a>
      <a href="#projects"><AiFillProject/></a>
      <a href="#contact"><BsFillChatDotsFill/></a>
    </nav>
  )
}

export default Nav