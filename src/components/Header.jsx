import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flexHeader'>
    <img src={logo} alt="website Logo" className='logo' />
    <nav className='child' >
        <Link to={'/'}><span className='navLink'>Projects</span></Link>
        <Link to={'/about'}><span className='navLink'>About</span></Link>
        <Link to={'/contact'}><span className='navLink'>Contact</span></Link>
        <Link to={'certificets'}><span className='navLink'>Certificets</span></Link>
    </nav>
    </header>
  )
}

export default Header