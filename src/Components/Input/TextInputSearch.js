import React, { useState } from 'react'
import Search from '../../assets/Header/Search.svg'
import SearchGreen from '../../assets/Header/Search-green.svg'
import SearchButton from '../Button/SearchButton'

function TextInputSearch({deviceSize, isVisible, customerStyle, onChange}) {
    const [textHover, setTextHover] = useState(false);
    const [formData, setFormData] = useState('');
    const handleClick = () =>{
        console.log(`Button : ${formData}`);       
        setFormData('');
    }
  return (
    <div className='flex justify-between items-center'>
        <div className={`border-2 ${textHover ? 'border-Primary' : 'border-Gray50'}  flex justify-start ${deviceSize ? '' : 'min-w-[500px] min-h-[45px]'} ${customerStyle}`}>
            <figure className={`flex justify-start items-center min-w-5 min-h-5 px-4`}>
                <img src={textHover ? SearchGreen : Search} alt='' className={`object-cover object-center min-w-5 min-h-5`} />
            </figure>
            <input  
                type='text' 
                className={`flex-grow text-base font-normal align-top text-left ${deviceSize ? 'rounded-xl' : 'min-w-[400px]'} focus:outline-none` } 
                placeholder='search'
                value={formData}
                onChange={(e) =>{setFormData(e.target.value)}}
                onMouseOver={()=>{setTextHover(true)}} 
                onMouseOut={()=>{setTextHover(false)}} 
            />
            {
                !isVisible && <SearchButton 
                                    onClick={handleClick}
                                    MouseOut= {()=>{setTextHover(true)}}
                                    MouseOver = {()=>{setTextHover(false)}}
                                    textHover={textHover}
                                />
            }
            
        </div>
    </div>
  )
}

export default TextInputSearch