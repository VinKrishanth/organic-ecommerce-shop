import React from 'react'
import Logo from '../../../Components/Navigation/logo/Logo'
import TextInputSearch from '../../../Components/Input/TextInputSearch'
import Call from './Call'

function MiddleHeader() {
  return (
    <div className={`flex justify-between items-center min-h-24`}>
        <Logo />
        <TextInputSearch />
        <Call />
    </div>
  )
}

export default MiddleHeader