import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import OrderHistoryGet from '../../Features/Account/OrderHistory/OrderHistory'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'

function OrderHistory() {
  return (
    <>
      <Header />
      <NavigationMenu 
        pageName={'Order History'}
        subNav={'Account'}
      />
      <OrderHistoryGet />
      <Footer />
    </>
  )
}

export default OrderHistory