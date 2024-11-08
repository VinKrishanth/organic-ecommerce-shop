import React from 'react'
import SocialMediaButton from '../../../Button/SocialMediaButton'
import SocialMedia from '../../../../assets/Icons/SocialMedia/SocialMedia.js'


function SocialMediaItems(conditionAll) {
 const handleSocialButton = (item) => {
    console.log(`click button -${item}`);
 }

  return (
    <div className={`flex justify-center items-center min-w-full gap-4 ${!conditionAll &&'px-10'} `}>
        {
             conditionAll  && SocialMedia.map((item, index) => {
                return(
                    <SocialMediaButton 
                        HoverIcon={item.SourceHoverURL}
                        Icon={item.SourceURL}
                        key={index}
                        btnBG={'bg-Gray05'}
                        btnBGHover={'bg-Primary'}
                        onClick={()=>{handleSocialButton(item.Name)}}

                    />
                )
            })
        }
        {
            !conditionAll  && SocialMedia.map((item, index) => {
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