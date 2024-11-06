import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import MyAccountPage from '../../Features/Account/Dashboard/MyAccount'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'

function MyAccount() {
  return (
    <>
      <Header />
      <NavigationMenu 
        pageName={'Dashboard'}
        subNav={'Account'}
      />
      <MyAccountPage />
      <Footer />
    </>
  )
}

export default MyAccount