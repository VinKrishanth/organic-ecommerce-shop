import React from 'react'
import Star from './Components/Star'

function Stars({starCount, starStyle}) {
  return (
    <>
     <Star 
       starCount={starCount}
       starStyle={starStyle}
     />
    </>
  )
}

export default Stars