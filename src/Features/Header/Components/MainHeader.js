import React from 'react'
import Menu from './Menu'
import Action from './Action'
import NavLists from './NavLists'

function MainHeader() {
  return (
    <header className='flex justify-between items-center min-h-16 bg-Gray90 text-Gray50'>
        <nav className='flex justify-start items-center'>
            <Menu />
            <NavLists />
        </nav>
        <Action />
    </header>
  )
}

export default MainHeader