import React from 'react'
import Header from '../Containers/Header'
import NavigationMenu from '../Components/Navigation/Menu/NavigationMenu'


function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />

      <NavigationMenu />
    </>
  )
}

export default Home