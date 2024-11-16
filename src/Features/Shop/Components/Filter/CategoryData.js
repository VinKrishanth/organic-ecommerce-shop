import React, { useState } from 'react'
import CommonTitle from './CommonTitle'
import SampleData from './SampleData'
import { useLocation, useNavigate } from 'react-router-dom'

function CategoryData() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(location.pathname);

    const handelChange = (item) => {
        setIsChecked(item.pathURL);
        navigate(`${item.pathURL}`)
    }

  return (
    <div className={`grid grid-cols-1 min-w-full gap-4`}>
        <CommonTitle 
            Title={`All Categories`}
            ID={`shopCategory1`}
        />
        <div 
            id={`shopCategory1`}
            className={`flex flex-col justify-start items-start col-span-1 gap-1`}
        >
            {
                SampleData.map((item, index) => {
                    return(
                        <div 
                            key={index} 
                            className='flex justify-start items-center gap-2'
                        >
                            <input 
                                type='radio'
                                name={item.ProductID}
                                value={item.CategoryName}
                                id={item.ID}
                                className={`max-h-5 min-w-5 cursor-pointer`}
                                onChange={()=>{handelChange(item)}}
                                checked={isChecked === item.pathURL }
                            />
                            <label 
                                className={`text-sm font-normal tracking-normal leading-6 align-top text-left text-Gray90 cursor-pointer`}>
                                {item.CategoryName}
                                <span className={`text-sm text-Gray50 font-normal pl-4`}>
                                    {`(${item.ProductCount})`}
                                </span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryData