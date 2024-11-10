import React  from 'react'
import CommonTitle from './CommonTitle'
import Tag from '../../../../Features/Blogs/Components/Tag'

function Tags() {

  return (
    <div className={`grid grid-cols-1 min-w-full gap-4 mt-8`}>
        <CommonTitle 
            Title={`Popular Tag`}
            ID={`productTags`}
        />
        <div 
            id={`productTags`}
            className={`flex flex-col justify-start items-start col-span-1 gap-1`}
        >
            <Tag 
                isVisible={true}
            />
        </div>
    </div>
  )
}

export default Tags