import React, { useState } from 'react'
import {arrowSourceUp, arrowGreenSourceUp} from '../../../../assets/Shop/index.js'

function CommonTitle({Title, ID, isIconShow}) {

    const [textHover, setTextHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    const handleIconClick = () => {
        buttonHover ? setButtonHover(false) : setButtonHover(true);
        const isVisible = document.getElementById(`${ID}`);
        !buttonHover ? isVisible.style.display = 'none' : isVisible.style.display = 'flex';
    } 

  return (
    <div 
        className={`flex justify-between items-center col-span-1`}
        onMouseOver={()=>{setTextHover(true)}}
        onMouseOut={()=>{setTextHover(false)}}
    >
        <h1 className={`text-xl font-medium tracking-normal leading-6 align-top text-left hover:text-textSuccessDark text-Gray90 cursor-pointer transition-all duration-700 ease-linear delay-75`}>{Title}</h1>
        {
            !isIconShow && (
                <figure 
                    className={`flex justify-center items-center p-2 cursor-pointer`}
                    onClick={handleIconClick}
                >
                    <img src={textHover ? arrowGreenSourceUp : arrowSourceUp} alt='The Filter source' className={`object-cover object-center ${buttonHover ? 'rotate-180' : 'rotate-0'}`} />
                </figure>
            )
        }
        
    </div>
  )
}

export default CommonTitle