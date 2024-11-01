import React from 'react'
import CopyRight from '../../../Components/Footer/CopyRight'
import FooterContainer from '../../../Components/Footer/FooterContainer'

function FooterMain() {
  return (
    <footer className={`flex justify-between flex-col gap-8 bg-black text-Gray50 min-w-full py-8 px-[300px]`}>
      <FooterContainer />
      <CopyRight />
    </footer>
  )
}

export default FooterMain