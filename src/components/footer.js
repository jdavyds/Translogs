import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <main>
        <div>
            <img src={logo} alt="" />
            <p>TRANSLOG Energy is a fast-growing petroleum haulage service provider with expertise in facilitating large-scale transport services </p>
        </div>
        <nav>
            <b>Links</b>
            <Link to='/'>HOME</Link>
            <Link to='/about-us'>ABOUT US</Link>
            <Link to='/services'>SERVICES</Link>
            <Link to='/gallery'>GALLERY</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>BLOG</Link>
        </nav>
        <div>
          <p><FontAwesomeIcon className='icons' icon={faLocationDot} /> <span> Benin-Agbor Expressway, By Precious Wealth Petrol Station, Ekhor-Niro, Benin City, Edo State.</span> </p>
          <p><FontAwesomeIcon className='icons' icon={faPhone} /> <span>0915 207 5211, 0802 892 2836 </span></p>
          <p> <span><FontAwesomeIcon className='icons' icon={faEnvelope} />info@translogenergy.com </span></p>
          <p>
            <a href="https://www.facebook.com/Translogenergy"><FontAwesomeIcon className='icons' icon={faFacebookF} /></a> <a href="https://wa.me/message/K7EC3GIRA32PE1"><FontAwesomeIcon className='icons' icon={faWhatsapp} /></a> <a href="https://www.instagram.com/translogenergy/"><FontAwesomeIcon className='icons' icon={faInstagram} /></a></p>
        </div>
      </main>
      <section>© 2022. Translog Energy Limited. All rights reserved.</section>
    </footer>
  )
}
