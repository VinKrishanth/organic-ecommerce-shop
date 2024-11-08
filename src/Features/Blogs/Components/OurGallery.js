import React from 'react'
import BlogMainTitle from './BlogMainTitle.js'
import Gallery from '../../../Components/Cards/Blog/Gallery'
import GalleryData from './GalleryData.js'

function OurGallery() {
  return (
    <div className={`flex justify-start items-start flex-col min-w-full gap-2`}>
        <BlogMainTitle 
          Title={'Our Gallery'}
        />
        <div className={`min-w-full grid grid-cols-4 gap-2`}>
          {
            GalleryData.map((item, index) => {
              return(
                <Gallery 
                  index={index}
                  sourceURL={item.sourceURL}
                  key={index}
                />
              )
            })
          }
        </div>
    </div>
  )
}

export default OurGallery