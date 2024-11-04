import React, { useState } from 'react'
import PropType from 'prop-types'

function FeatureItem({ID, sourceMainURL, sourceHoverURL, Title, Description, sourceAlt}) {
    const [textHover, setTextHover]  = useState(false);

  return (
    <ul 
        id={ID}
        key={ID}
        className={`flex justify-start items-center gap-4 max-w-[312px] min-h-[132px] border-b-4 border-white hover:border-Primary transition-all duration-500 ease-linear delay-75 cursor-pointer`}
        onMouseOver={() => {setTextHover(true)}}
        onMouseOut={() => {setTextHover(false)}}
    >
        <li className={`flex justify-center items-center min-w-[72px] max-w-[72px] min-h-[72px] p-4 ${textHover ? 'bg-Primary' : 'bg-Gray05'}  rounded-full`}>
            <img src={textHover ?  sourceHoverURL : sourceMainURL } alt={sourceAlt} className={`object-cover object-center`} />
        </li>
        <li className={`flex justify-between items-start flex-col gap-2 align-top tracking-normal text-left leading-6`}>
            <h2 className={`font-semibold text-Gray90 text-lg cursor-pointer`}>{Title}</h2>
            <p className={`font-normal text-Gray40 text-sm cursor-pointer`}>{Description}</p>
        </li>
    </ul>
  )
}

FeatureItem.prototype = {
    ID : PropType.string.isRequired,
    sourceMainURL : PropType.string.isRequired,
    sourceHoverURL : PropType.string.isRequired,
    Title : PropType.string.isRequired,
    Description : PropType.string.isRequired,
}

export default FeatureItem