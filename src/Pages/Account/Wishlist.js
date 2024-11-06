import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import WishlistGet from '../../Features/Account/Wishlist/Wishlist'

function Wishlist() {
  return (
    <>
      <Header />
      <NavigationMenu 
        pageName={'Wishlist'}
        subNav={'Account'}
      />
      <WishlistGet />
      <Footer />
    </>
  )
}

export default Wishlist