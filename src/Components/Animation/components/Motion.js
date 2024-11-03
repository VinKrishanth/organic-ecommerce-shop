import React from 'react'

function Motion({motionStyle}) {
  return (
    <div className={`min-w-4 min-h-4 bg-textSuccess ${motionStyle} bg-opacity-50`}></div>
  )
}

export default Motion