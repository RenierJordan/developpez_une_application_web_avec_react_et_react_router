import React from 'react'
import "../Styles/Header.css"

function Header() {
  return (
    <header>
        <img src="LOGO.jpg" alt="" />
        <div className='Navbar'>
            <div>Accueil</div>
            <div>A propos</div>
        </div>
    </header>
  )
}

export default Header