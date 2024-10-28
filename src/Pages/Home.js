import React from 'react'
import Header from '../Containers/Header'
import NormalButton from '../Components/Cards/Product/ProductCard'


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
        cardSourceURL={x}
        viewRate={4}
      /> */}
      <NormalButton />
    </>
  )
}

export default Home