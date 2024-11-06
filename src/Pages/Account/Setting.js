import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import SettingGet from '../../Features/Account/Setting/Setting'

function Setting() {
  return (
    <>
      <Header />
      <NavigationMenu 
        pageName={'Setting'}
        subNav={'Account'}
      />
      <SettingGet />
      <Footer />
    </>
  )
}

export default Setting