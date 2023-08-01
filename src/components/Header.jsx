import React from 'react'
import "../Styles/Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='header'>
      <NavLink to="/"><img src="LOGO.jpg" alt="" /></NavLink>
        <div className='header__Navbar'>
          <NavLink to="/"><div>Accueil</div></NavLink>
          <NavLink to="/About"><div>A propos</div></NavLink>  
        </div>
        </div>
    </header>
  )
}

export default Header