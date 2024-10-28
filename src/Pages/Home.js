import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import NormalButton from '../Components/Cards/Shopping/ShoppingCartPopup'
import X from '../assets/Product/apple.svg'

function Home() {
  return (
    <>
      <Header 
        toggleMenu={true}
      />
      {/* <NormalButton 
        Price={'$120'}
        discountPrice={'$150'}
        offer={true}
        btnLabel={'sale 50 %'}
        cardSourceURL={X}
        viewRate={4}
      /> */}
      <NormalButton />
    </>
  )
}

export default Home