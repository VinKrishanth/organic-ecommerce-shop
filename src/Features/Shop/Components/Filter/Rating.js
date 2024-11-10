import React, { useState }  from 'react'
import CommonTitle from './CommonTitle'
import Stars from '../../../../Components/Star/Stars'
import RatingData from './RatingData'

function Rating() {
    const [isChecked, setIsChecked] = useState(false);
    const handelChange = (name) => {
        setIsChecked(true);
        const navTitle = document.getElementById('navProductPage');
        if(navTitle){
            // navTitle.innerText = name;
        }
    }
    return (
        <div className={`grid grid-cols-1 min-w-full gap-4 mt-8`}>
            <CommonTitle 
                Title={`Rating`}
                ID={`productRating`}
            />
            <div 
                id={`productRating`}
                className={`flex flex-col justify-start items-start col-span-1 gap-1`}
            >
                {
                    RatingData.map((item, index) => {
                        return(
                            <div key={index} className={`flex justify-start items-center min-w-full`}>
                                <input 
                                    type='checkbox'
                                    name={item.RatingText}
                                    value={item.RatingText}
                                    id={item.ID}
                                    className={`max-h-5 min-w-5 cursor-pointer`}
                                    onChange={()=> {handelChange()}}
                                />
                                <div className={`flex justify-start items-center`}>
                                    <Stars 
                                        starCount={item.Rating}
                                        starStyle={'scale-90'}
                                    />
                                    <p className={`text-xs font-normal tracking-normal leading-6 align-top text-left text-Gray90 lowercase`}>{item.RatingText}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rating