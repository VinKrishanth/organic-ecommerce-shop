import React, { useState } from 'react'
import {demoProfile} from '../../../../assets/Dashboard/index.js'


function Account({modifiedStyle}) {
  const [profileImage, setProfileImage] = useState(demoProfile);
  const handleImageClick = () => {
    document.getElementById('userProfile').click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
         setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className={`flex justify-center items-center col-span-4`}>
       <div className={`flex flex-col justify-start items-center ${modifiedStyle ? '' : 'min-w-[224px] min-h-[289px]'}   gap-4 rounded-full`}>
          <figure className={`flex justify-center items-center ${modifiedStyle ? 'max-w-[120px] max-h-[120px]' : 'max-w-[224px] max-h-[224px]'}   cursor-pointer rounded-full overflow-hidden `}>
            <img 
              src={profileImage} 
              alt='The user profile ' 
              className={`object-cover object-center hover:scale-110 transition-all duration-700 ease-linear `} 
            />
          </figure>
          
          {
            !modifiedStyle && (
              <div 
                className={`flex justify-center items-center min-h-11 min-w-40 border-2 text-Primary hover:text-PrimaryHover border-Primary hover:border-PrimaryHover transition-all duration-700 ease-linear rounded-full`}
                onClick={handleImageClick}
              >
                <span className='text-sm font-semibold align-top tracking-normal leading-6'>Chose Image</span>
                <input 
                  type='file' 
                  id='userProfile' 
                  className={`hidden`} 
                  onChange={handleFileChange} 
                  accept='image/*'
                />
              </div>
            )
          }
       </div>
    </div>
  )
}

export default Account