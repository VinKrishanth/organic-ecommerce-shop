import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import OrderDetail from '../../Features/Account/OrderDetails/OrderDetail'

function OrderDetails() {
    return (
        <>
          <Header />
            <NavigationMenu 
                pageName={'Order Details'}
                subNav={'Order History'}
            />
          <OrderDetail />
          <Footer />
        </>
      )
    }
    

export default OrderDetails