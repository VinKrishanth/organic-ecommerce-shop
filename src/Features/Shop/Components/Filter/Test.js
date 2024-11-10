import React from 'react'

function Test() {
  return (
    <div className={`flex justify-start items-start col-span-1`}>
                    <div className='flex justify-start items-center gap-4'>
                        <div
                            className={`flex justify-center items-center  min-w-5 min-h-5 border-2 rounded-full ${textChecked ? 'border-Primary' : 'border-Gray05'}`}
                            onClick={()=>{handleRadioChange()}}
                        >
                            <div className={`min-w-3 min-h-3 bg-Primary rounded-full ${textChecked ? 'visible' : 'hidden' }`}>
                                <input 
                                    type='radio'
                                    name='vegetable'
                                    value={``}
                                    className={`min-h-5 min-w-5 hidden`}
                                    id='type1'
                                />
                            </div>
                        </div>
                        <label className={`text-xl font-normal tracking-normal leading-6 align-top text-left text-Gray90`}>Vegetables <span className={`text-sm text-Gray50 font-normal`}>{`(${parseInt(225)})`}</span></label>
                    </div>
                </div>
  )
}

export default Test