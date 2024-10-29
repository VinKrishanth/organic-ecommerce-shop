import React from 'react'
import Star from './Components/Star'

function Stars({starCount, starStyle, viewCount}) {
  return (
    <>
     <Star 
       starCount={starCount}
       starStyle={starStyle}
       viewCount={viewCount}
     />
    </>
  )
}

export default Stars