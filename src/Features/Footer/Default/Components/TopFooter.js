import React, { useContext } from 'react'
import TextInputButton from '../../../../Components/Input/TextInputButton.js'
import SocialMediaButton from '../../../../Components/Button/SocialMediaButton.js'
import SocialMedia from '../../../../assets/Icons/SocialMedia/SocialMedia.js'
import {handleFooterSocialMediaBtn} from '../../../../Components/Js/commonButtonFunction.js'
import {UserContext} from '../../Default/Footers.js'

function TopFooter() {
  const {deviceSize} = useContext(UserContext);
  return (
    <div className={`flex min-w-full ${deviceSize? 'flex-col gap-8' : 'xl:flex-row  md:flex-col md:justify-start md:items-start items-center gap-16'} hidden`}>
      <div className={`flex   flex-col ${deviceSize ? '' : '2xl:max-w-[30%] xl:min-w-[40%] lg:max-w-[40%]  text-left '} gap-4 leading-6 tracking-normal align-top `}>
          <h1 className={`text-2xl font-semibold hover:translate-x-4 transition-all duration-700 ease-linear delay-100 cursor-pointer`}>Subcribe our Newsletter</h1>
          <p className={`text-sm font-normal text-justify  hover:translate-x-4 transition-all duration-700 ease-linear delay-100 text-Gray50 cursor-pointer`}>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
      </div>
      <div className={`flex ${deviceSize? 'flex-col gap-4' : 'lg:flex-col xl:flex-row lg:gap-4 flex-grow justify-start items-center gap-16'}`}>
         <TextInputButton />
         <ul className={`flex  justify-center items-center sm:-4 gap-6`}>
            {
              SocialMedia.map((item, index)=>{
                return(
                  item.available && (
                    <li key={index} className='justify-center '>
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