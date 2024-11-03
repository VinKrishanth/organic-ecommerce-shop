import React from 'react'
import TeamCards from '../../../../Components/Cards/Team/TeamCards'
import MemberInfo from './MemberInfo.js'

function Member() {
  return (
    <div className={`grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6`}>
        {
            MemberInfo.map((info, index) => {
                return(
                    <div key={index} className={`col-span-1`}>
                        <TeamCards 
                            memberJob={info.Job}
                            memberName={info.Name}
                            sourceURL={info.sourceURL}
                            sourceAlt={info.sourceAlt}
                            key={1}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Member