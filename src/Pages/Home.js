import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import ProductNormal from '../Components/Cards/Product/ProductNormal'
// import NormalButton from '../Components/Cards/BIG/ProductBig'
import X from '../assets/Product/apple.svg'
import Y from '../assets/Product/blog-source.svg'


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
        cardTitle={`Sri Lanka Apple`}
        productID={3}
      /> */}
      <ProductNormal />
    </>
  )
}

export default Home