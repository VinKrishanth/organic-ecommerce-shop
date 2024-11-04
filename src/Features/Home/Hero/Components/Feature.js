import React from 'react'
import FeatureItem from './FeatureItem'
import FeatureDetails from '../../../../Components/Feature/Components/FeatureDetails.js'

function Feature() {
  return (
    <div className={`grid grid-cols-4 border-b-2`}>
      {
        FeatureDetails.map((item, index) => {
          return(
            <div key={index} className={`col-span-1`}>
                <FeatureItem 
                  ID={item.ID} 
                  sourceMainURL={item.sourceGreenURL} 
                  sourceHoverURL={item.sourceWhiteURL} 
                  Title={item.featureTitle} 
                  Description={item.featureDescription}
                  sourceAlt={item.sourceAlt}
                />
            </div>
          )
        })
      }
    </div>
  )
}

export default Feature