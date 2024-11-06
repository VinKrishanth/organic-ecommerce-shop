import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import OrderHistoryGet from '../../Features/Account/OrderHistory/OrderHistory'

function OrderHistory() {
  return (
    <>
      <Header />
      <OrderHistoryGet />
      <Footer />
    </>
  )
}

export default OrderHistory