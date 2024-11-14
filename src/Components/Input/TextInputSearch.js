import React, { useState } from 'react'
import Search from '../../assets/Header/Search.svg'
import SearchGreen from '../../assets/Header/Search-green.svg'
import SearchButton from '../Button/SearchButton'

function TextInputSearch({deviceSize, isVisible, customerStyle, placeholder, inputIcon, inputStyle}) {
    const [textHover, setTextHover] = useState(false);
    const [formData, setFormData] = useState('');
    const handleClick = () =>{
        console.log(`search : ${formData}`);       
        setFormData('');
    }
  return (
    <div className='flex justify-between items-center'>
        <div className={`border-2   flex justify-start ${deviceSize ? '' : 'min-w-[500px] min-h-[45px]'} ${customerStyle} ${inputStyle ? 'rounded-l-full rounded-r-full min-w-[650px]': `${textHover ? 'border-Primary' : 'border-Gray50'}`}  overflow-hidden z-10`}>
            {!inputIcon && (
                <figure className={`flex justify-start items-center min-w-5 min-h-5 px-4`}>
                    <img src={textHover ? SearchGreen : Search} alt='' className={`object-cover object-center min-w-5 min-h-5`} />
                </figure>
            )}
            <input  
                type='text' 
                className={`flex-grow text-base font-normal align-top text-left ${deviceSize ? 'rounded-xl' : 'min-w-[400px]'} focus:outline-none ${inputIcon && 'pl-4'} ${inputStyle && ''} ` } 
                placeholder={placeholder? placeholder : 'search'}
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
                                    searchStyle={true}
                                    label={`Apply Coupon`}
                                />
            }
            
        </div>
    </div>
  )
}

export default TextInputSearch