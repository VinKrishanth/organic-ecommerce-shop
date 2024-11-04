import React, { useState } from 'react'
import {UserGreen, cartGreen, heartGreen, heartWhite, UserWhite, cartWhite} from '../../../assets/Header/Nav/index.js'

function Action() {
    const [textHover, setTextHover] = useState(false);
    const userFn = [
        {ID: 1 , action: 'wishlist', mainSource:cartWhite , hoverSource: cartGreen },
        {ID: 2 , action: 'shopping' , mainSource:heartWhite , hoverSource: heartGreen},
        {ID: 3 , action: 'account' , mainSource:UserWhite , hoverSource: UserGreen},
    ];

  return (
    <ul className={`flex justify-between items-center px-4 min-w-44`}>
        {
            userFn.map((item, index) => {
                return(
                    <figure 
                        key={index}
                        className={`flex justify-center items-center pr-6`}
                        onMouseOut={()=>{setTextHover(false)}}
                        onMouseOver={()=>{setTextHover(index)}}
                    >
                        <img 
                            src={ textHover === index ? item.hoverSource : item.mainSource} 
                            alt='The user action icon' 
                            className={`object-cover object-center min-h-8 min-w-8 cursor-pointer`} 
                        />
                    </figure>
                )
            })
        }
    </ul>
  )
}

export default Action