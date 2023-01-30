import React from 'react'
import './about.css'
import self from '../../assets/self2.jpg'
import {BsLinkedin, BsFacebook, BsInstagram} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={self} alt="About Me image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__cards">
            </article>
          </div>
          <p>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="social__media">
          <a href="https://www.linkedin.com/in/gautam-sapre" target="_blank"> <BsLinkedin /> </a>
          <a href="https://www.facebook.com/gautam.sapre.7" target="_blank"> <BsFacebook /> </a>
          <a href="https://www.instagram.com/gautam_sapre/" target="_blank"> <BsInstagram /> </a>
        </div>
        </div>

      </div>
    </section>
  )
}

export default About