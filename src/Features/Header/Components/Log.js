import React from 'react'
import { useNavigate } from 'react-router-dom'

function Log() {
  const auth = [
    {ID: 1 , action: 'Sign In' , isVisible: true, pathURL: '/organic-ecommerce-shop/my-account/sign-in'},
    {ID: 2 , action: 'Sign Up', isVisible: false, pathURL: '/organic-ecommerce-shop/my-account/sign-up'}
  ];
  const navigate = useNavigate();
  const handleClick = (item) =>{
    navigate(`${item.pathURL}`);
  }
  return (
    <ul className={`flex justify-start items-center gap-2`}>
        {
            auth.map((item, index) => {
                return(
                    <li key={index} className={'flex justify-start items-center gap-2'}>
                        <p  
                          className={`text-xs font-normal font-5 tracking-normal align-top text-left text-Gray60 hover:underline hover:text-Primary transition-all duration-500 ease-linear  cursor-pointer`}
                          onClick={()=>{handleClick(item)}}
                        >
                            {item.action}
                        </p>
                        {item.isVisible  && <p key={index+2} className='min-h-3 min-w-[1px] bg-gray-600 rotate-[15deg]'></p> }
                        
                    </li>
                )
            })
        }

    </ul>
  )
}

export default Log