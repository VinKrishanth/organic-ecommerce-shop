import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import ShoppingCart from '../../Features/Account/Shopping/ShoppingCart'

function Cart() {
  return (
    <>
      <Header />
      <NavigationMenu 
        pageName={'Shopping Cart'}
        subNav={'Account'}
      />
      <ShoppingCart  />
      <Footer />
    </>
  )
}

export default Cart