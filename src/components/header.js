import React, {useState} from 'react'
import logo from './../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [sticky, setSticky] = useState(false)
    function handleScroll(e) {
        if(window.scrollY > 130) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const [hamNav, setHamNav] = useState(false)
    function handleShow() {
        setHamNav(!hamNav)
    }
  return (
    <header className={sticky ? 'sticky' : ''}>
        <Link to='/' className='logo'>
            <img src={logo} alt="" />
        </Link>
        <nav className='navs'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about-us'>ABOUT US</NavLink>
            <NavLink to='/services'>SERVICES</NavLink>
            <NavLink to='/gallery'>GALLERY</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/blog'>BLOG</NavLink>
            <NavLink to='/foundation'>FOUNDATION</NavLink>
            <NavLink to='/career'>CAREER</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            <NavLink to='/invest-with-us'>INVEST WITH US</NavLink>
        </nav>
        <div className='hamDiv'>
                <FontAwesomeIcon icon={hamNav ? faTimes : faBars}  className='hambuger' onClick={handleShow}/> 
                <nav className={hamNav ? 'show' : ''}>
                    <NavLink  to='/' onClick={handleShow}>HOME</NavLink>
                    <NavLink  to='/about-us' onClick={handleShow}>ABOUT US</NavLink>
                    <NavLink  to='/services' onClick={handleShow}>SERVICES</NavLink>
                    <NavLink  to='/gallery' onClick={handleShow}>GALLERY</NavLink>
                    <NavLink  to='/faq' onClick={handleShow}>FAQ</NavLink>
                    <NavLink  to='/blog' onClick={handleShow}>BLOG</NavLink>
                    <NavLink  to='/foundation' onClick={handleShow}>FOUNDATION</NavLink>
                    <NavLink  to='/career' onClick={handleShow}>CAREER</NavLink>
                    <NavLink  to='/contact' onClick={handleShow}>CONTACT</NavLink>
                    <NavLink to='/invest-with-us'>INVEST WITH US</NavLink>
                </nav>
            </div>
    </header>
  )
}
