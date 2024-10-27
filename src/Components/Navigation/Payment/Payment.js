import React from 'react'
import Card from '../../../assets/Header/Bag-Black.svg'
import Heart from '../../../assets/Header/Heart.svg'

function Payment({display}) {
  return (
    <div className={`flex justify-end gap-5 `}>
        <figure className={`min-w-8 min-h-8 flex justify-center items-center cursor-pointer`}>
            <img src={Heart} alt='' className={`object-cover object-center scale-150`} />
        </figure>
        <div className='border-r-2 min-w-1 min-h-4 border-Gray20 bg-red '></div>
        <div className={`flex gap-4 items-center justify-center`}>
            <div className='flex  relative cursor-pointer'>
                <img src={Card} alt='' className={`object-cover object-center min-h-8 min-w-8 max-w-8  max-h-8 scale-150`} />
                <span className={`max-h-[18px] max-w-[18px] min-w-[18px] min-h-[18px] bg-greenGray70 absolute bottom-[22px] right-0 rounded-full flex justify-center items-center text-[10px] text-white ${display ? '' : 'hidden'}`}>2</span>
            </div>
            <div className='flex flex-col'>
                <p className='font-normal leading-5 tracking-normal text-xs cursor-pointer'>Shopping cart:</p>
                <p className='text-Gray90 text-sm font-medium tracking-normal leading-normal cursor-pointer'>$57.00</p>
            </div>
        </div>
    </div>
  )
}

export default Payment