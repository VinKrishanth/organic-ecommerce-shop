import React from 'react'
import Navigation from '../Features/Header/Navigation'

function Header({toggleMenu}) {
  return (
    <Navigation 
      toggleMenu={toggleMenu}
    />
  )
}

export default Header