import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import Login from '../../Features/Login/Login'

function SignIn() {
    return (
        <>
          <Header />
          <NavigationMenu 
            pageName={'Login'}
            subNav={'Account'}
          />
          <Login />
          <Footer />
        </>
    )
}

export default SignIn