import React from 'react'
import TackerButton from './Btn/TackerButton'
import {CheckWhite} from '../../../../assets/Dashboard/index.js'

function ProgressTracker({trackerState}) {
  return (
    <div className={`flex flex-col justify-center items-center col-span-9 min-h-10 min-w-full  px-16 relative mt-8`}>
      <div className={`flex justify-between items-start min-w-full z-30`}>
          <TackerButton 
            key={1}
            sourceURL={CheckWhite}
            textStyle={`text-white bg-Primary`}
            title={`Order received`}
            state={'visited'}
          />
          <TackerButton 
            key={2}
            subTitle={`02`}
            textStyle={`text-white bg-Primary`}
            title={'Processing'}
            state={'active'}
          />
          <TackerButton 
            key={3}
            subTitle={`03`}
            textStyle={`text-Primary border-dotted border-2 border-Primary bg-white`}
            title={'On the way'}
            state={false}
          />
          <TackerButton 
            key={4}
            subTitle={`04`}
            textStyle={`text-Primary border-dotted border-2 border-Primary bg-white`}
            title={'Delivered'}
            state={false}
          />
      </div>
      <div className={`min-w-full top-4 right-0 absolute px-24 z-10`}>
        <div className={`${trackerState === 'completed' ? 'bg-Primary' : 'bg-Gray05'} min-h-2`}></div>
      </div>
      {
        String(trackerState).toLowerCase() === 'processing' && (
          <div className={`min-w-[60%] top-4 left-0 absolute px-24 z-20 `}>
            <div className={`bg-Primary min-h-2 rounded-r-full`}></div>
          </div>
        )
      }
      {
        String(trackerState).toLowerCase() === 'ontheway' && (
          <div className={`min-w-[85%] top-4 left-0 absolute px-24 z-20 `}>
            <div className={`bg-Primary min-h-2 rounded-r-full`}></div>
          </div>
        )
      }
    </div>
  )
}

export default ProgressTracker