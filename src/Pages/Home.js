import React from 'react'
import Header from '../Containers/Header'
// import NormalButton from '../Components/Cards/Product/ProductCard'
import NormalButtonX from '../Components/Cards/Team/TeamCards'
// import NormalButton from '../Components/Cards/BIG/ProductBig'
import X from '../assets/Product/apple.svg'
import teamMember from '../assets/Product/team-image.svg'
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
      <NormalButtonX 
        memberJob={`Ceo & Founder`}
        memberName={`Jenny Wilson`}
        sourceURL={teamMember}
      />
    </>
  )
}

export default Home