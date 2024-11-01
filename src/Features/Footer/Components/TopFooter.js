import React from 'react'
import TextInputButton from '../../../Components/Input/TextInputButton'
import SocialMediaButton from '../../../Components/Button/SocialMediaButton'
import SocialMedia from '../../../assets/Icons/SocialMedia/SocialMedia.js'
import {handleFooterSocialMediaBtn} from '../../../Components/Js/commonButtonFunction.js'

function TopFooter() {
  return (
    <div className={`min-w-full flex justify-between items-center  px-[300px] min-h[162px]  py-8 gap-16`}>
      <div className={`flex justify-start flex-col min-h-full`}>
          <h1 className={`text-lg leading-6 align-top font-semibold hover:translate-x-3 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>Subcribe our Newsletter</h1>
          <p className={`text-sm leading-6 align-top font-normal hover:translate-x-3 transition-all duration-700 ease-linear delay-100 max-w-[400px] text-Gray40 cursor-pointer`}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
      </div>
      <div className={`flex-grow flex justify-center items-center gap-8`}>
         <TextInputButton />
         <ul className={`flex justify-center items-center gap-4`}>
            {
              SocialMedia.map((item, index)=>{
                return(
                  item.available && (
                    <li key={index} className='justify-center'>
                      <SocialMediaButton 
                        HoverIcon={item.SourceHoverURL}
                        Icon={item.SourceURL}
                        btnBG={'bg-white'}
                        btnBGHover={'bg-Primary'}
                        onClick={()=>{handleFooterSocialMediaBtn(item.Name)}}
                      />
                    </li>
                  )
                )
              })
            }
         </ul>
      </div>
    </div>
  )
}

export default TopFooter