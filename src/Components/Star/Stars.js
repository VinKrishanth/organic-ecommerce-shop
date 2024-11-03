import React from 'react'
import Star from './Components/Star'

function Stars({starCount, starStyle, viewCount, starSize}) {
  return (
    <>
     <Star 
       starCount={starCount}
       starStyle={starStyle}
       viewCount={viewCount}
       starSize={starSize}
     />
    </>
  )
}

export default Stars