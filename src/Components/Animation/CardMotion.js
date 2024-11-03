import React from 'react'
import Motion from './components/Motion'

function CardMotion({isVisible}) {
  return (
    <>
        <Motion motionStyle={`absolute top-0 left-0 rounded-br-full ${isVisible}`}/>
        <Motion motionStyle={`absolute bottom-0 right-0 rounded-tl-full ${isVisible}`}/>
        <Motion motionStyle={`absolute top-0 right-0 rounded-bl-full ${isVisible}`}/>
        <Motion motionStyle={`absolute bottom-0 left-0 rounded-tr-full ${isVisible}`}/>
    </>
  )
}

export default CardMotion