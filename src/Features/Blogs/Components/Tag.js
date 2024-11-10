import React from 'react'
import BlogMainTitle from './BlogMainTitle.js'
import NormalButton from '../../../Components/Button/NormalButton'

function Tag({isVisible}) {
  const tagData = [
    {ID: 1 , tags: 'Healthy'},
    {ID: 2 , tags: 'Low fat'},
    {ID: 3 , tags: 'Vegetarian'},
    {ID: 4 , tags: 'Bread'},
    {ID: 5 , tags: 'Kid foods'},
    {ID: 6 , tags: 'Vitamins'},
    {ID: 7, tags: 'Snacks'},
    {ID: 8 , tags: 'Tiffin'},
    {ID: 9 , tags: 'Meat'},
    {ID: 10 , tags: 'Launch'},
    {ID: 11 , tags: 'Dinner'},
  ];
  
  return (
    <div className={`flex justify-start items-start flex-col min-w-full gap-2`}>
        {
          !isVisible && (
            <BlogMainTitle 
              Title={'Popular Tag'}
            />
          )
        }
        <div className={`flex flex-wrap  min-w-full gap-2 `}>
           {
            tagData.map((item, index) => {
              return(
                <NormalButton 
                  key={index}
                  label={item.tags}
                  styleColor={true}
                  minHight={`min-h-8`}
                  minWidth={true}
                />
              )
            })
           }
        </div>
    </div>
  )
}

export default Tag