import React from 'react'
import CopyRight from '../../../Components/Footer/CopyRight'
import FooterContainer from '../../../Components/Footer/FooterContainer'

function FooterMain({deviceSize}) {
  return (
    <footer className={`flex  flex-col bg-black text-Gray50 min-w-full gap-8 justify-between 2xl:py-20 2xl:px-72`}>
      <FooterContainer  deviceSize = {deviceSize}/>
      <CopyRight deviceSize = {deviceSize}/>
    </footer>
  )
}

export default FooterMain