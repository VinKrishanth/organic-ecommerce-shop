import React  from 'react'
import { EmailSource, EmailBlueSource, PhoneCallSource, PhoneCallBlueSource, mapPinBlueSource,  mapPinSource} from '../../../assets/About/index.js'
import Info from './Info.js'

function ContactInfo() {
    const contactInfoData = [
        {ID: 1 , sourceMain: mapPinSource , sourceHover: mapPinBlueSource, title: '2715 Ash Dr. San Jose, South Dakota 83475', isVisible: true},
        {ID: 2 , sourceMain: EmailSource , sourceHover: EmailBlueSource,  title: 'Proxy@gmail.com Help.proxy@gmail.com', isVisible: true},
        {ID: 3 , sourceMain: PhoneCallSource , sourceHover: PhoneCallBlueSource ,  title: '(219) 555-0114 (164) 333-0487', isVisible: false},
    ]
  return (
    <div className={`flex justify-start items-start col-span-3 border-2 p-8 rounded-md shadow-lg`}>
       <div className={`flex justify-start items-start min-w-full`}>
            <div className={`grid grid-cols-1 min-w-full gap-8`}>
                {
                    contactInfoData.map((item ,index) => {
                        return(
                            <Info 
                                sourceHoverURL={item.sourceHover}
                                sourceMainURL={item.sourceMain}
                                title={item.title}
                                key={index}
                                index={index}
                                unique={item.isVisible}
                            />
                        )
                    })
                }
            </div>
       </div>
    </div>
  )
}

export default ContactInfo