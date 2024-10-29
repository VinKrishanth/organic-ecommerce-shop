import React from 'react'
import SocialMediaButton from '../../../Button/SocialMediaButton'
import SocialMedia from '../../../../assets/Icons/SocialMedia/SocialMedia.js'


function SocialMediaItems() {
 const handleSocialButton = (item) => {
    console.log(`click button -${item}`);
 }

  return (
    <div className={`flex justify-center items-center min-w-full gap-4 px-10`}>
        {
            SocialMedia.map((item, index) => {
                return(

                    item.available && (
                        <SocialMediaButton 
                            HoverIcon={item.SourceHoverURL}
                            Icon={item.SourceHoverURL}
                            key={index}
                            btnBG={''}
                            btnBGHover={'bg-Primary'}
                            onClick={()=>{handleSocialButton(item.Name)}}

                        />
                    )

                )
            })
        }
    </div>
  )
}

export default SocialMediaItems