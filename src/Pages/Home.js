import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import Blogs from '../Components/Cards/Blog/Blogs'
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
      <Blogs 
        blogSource= {Y}
        blogSourceURL= {`/`}
        blogTitle= {`Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`}
      />
    </>
  )
}

export default Home