import React from 'react'
import TextInputSearch from '../../../Components/Input/TextInputSearch'
import TopCategories from './TopCategories'
import Tag from './Tag'
import OurGallery from './OurGallery'
import RecentlyAdded from './RecentlyAdded'

function Filter() {
  return (
    <div className={`flex justify-start items-start col-span-4`}>
        <div className={`grid grid-cols-1 min-w-full mt-10 gap-8`}>
            <TextInputSearch 
                isVisible={true}
                deviceSize={true}
                customerStyle={`min-h-12 min-w-full rounded`}
            />
            <TopCategories />
            <Tag />
            <OurGallery />
            <RecentlyAdded />
        </div>    
    </div> 
  )
}

export default Filter