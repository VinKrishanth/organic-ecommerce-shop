import React from 'react'
import Header from '../../Containers/Header'
import Footer from '../../Containers/Footer'
import NavigationMenu from '../../Components/Navigation/Menu/NavigationMenu'
import Register from '../../Features/Login/Register'

function SignUp() {
    return (
        <>
          {/* <Header />
          <NavigationMenu 
            pageName={'Create Account'}
            subNav={'Account'}
          /> */}
          <Register  />
          {/* <Footer /> */}
        </>
      )
    }
export default SignUp