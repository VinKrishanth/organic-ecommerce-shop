import React from 'react'
import NavigationPage from './NavigationPage'
import Menu from '../Menu/Menu'

function NavigationMenuPage({deviceSize}) {
  return (
    <div className='flex items-center gap-8'>
      <Menu deviceSize={deviceSize}/>
      <NavigationPage 
        deviceSize={deviceSize} 
        paddingLeft = {true}
      />
    </div>
  )
}

export default NavigationMenuPage