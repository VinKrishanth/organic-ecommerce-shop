import React, { useState } from 'react'
import TackerButton from '../../../Account/OrderDetails/Components/Btn/TackerButton'

function Pagination() {
    const [textHover, setTextHover] = useState(true);
    var array = [];
    const tackerCount = () => {
        const count = 1;
        for (let index = 0; index < 21; index++) {
            array[index] = count + index;
        }
    }
    console.log(array);
  return (
    <div className={`flex justify-center items-center min-w-full min-h-9 col-span-12`}>
        <div className={`grid grid-cols-1`}>
            <div className={`flex justify-between items-start min-w-full col-span-1`}>
                <TackerButton 
                    key={1}
                    subTitle={`${1}`}
                    textStyle={`text-white bg-Primary`}
                    state={textHover ? 'active' : false}
                />
            </div>
        </div>
    </div>
  )
}

export default Pagination