import React from 'react'
import TagButton from './Components/TagButton'

function TagsButton({Type, onClick , tagStyle, label}) {
  return (
    <>
        {
            Type === 'Default' &&  
            <TagButton 
              label={label}
              onClick={onClick}
              textBackground={'bg-textError'}
              tagStyle={tagStyle}
            /> 
        }

        {   Type === 'New' &&  
            <TagButton 
              label={label}
              onClick={onClick}
              textBackground={'bg-textWaring'}
              tagStyle={tagStyle}
            />  
        }

        {   Type === 'BestSale' &&  
            <TagButton 
                label={'Best Sale'}
                onClick={onClick}
                textBackground={'bg-textBlue'}
                tagStyle={tagStyle}
          />  
        }

        {   Type === 'Stock' &&  
            <TagButton 
                label={label}
                onClick={onClick}
                textBackground={'bg-Gray90'}
                tagStyle={tagStyle}
            />  
        }
    </>
  )
}

export default TagsButton