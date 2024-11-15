import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import Checkouts from '../../Features/Account/Checkout/Checkouts'

function Checkout() {
    return (
        <>
          <Header />
          <NavigationMenu 
            pageName={'checkout'}
            subNav={'Shopping Cart'}
          />
          <Checkouts />
          <Footer />
        </>
    )
}
export default Checkout