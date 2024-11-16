import React from 'react'
import LatestNews from '../Features/Home/Blog/LatestNews'
import Testimonial from '../Features/Home/Client/Testimonial'
import Members from '../Features/Home/Client/Members'

function HomeContent() {
  return (
    <>
      <LatestNews />
      <Members />
      <div className={`min-w-full`}>
        <Testimonial /> 
      </div>
    </>
  )
}

export default HomeContent