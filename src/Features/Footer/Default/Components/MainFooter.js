import React from 'react'
import CopyRight from './CopyRight'
import FooterContainer from './FooterContainer'

function MainFooter() {
  const customerStyle = {
    container: 'flex flex-col bg-black text-white',
    dxl: '2xl:px-32 2xl:py-16 gap-8',
    xl: 'xl:py-16',
    lg: 'lg:min-w-screen ',
    md: 'md:py-10 ',
    sm:' sm:px-16 sm:py-10  ',
    base: 'min-w-full p-10'
  }
  return (
    <div className={`${customerStyle.container} ${customerStyle.dxl} ${customerStyle.xl} ${customerStyle.lg} ${customerStyle.md} ${customerStyle.sm} ${customerStyle.base} `}>
      <FooterContainer />
      <CopyRight />
    </div>
  )
}

export default MainFooter