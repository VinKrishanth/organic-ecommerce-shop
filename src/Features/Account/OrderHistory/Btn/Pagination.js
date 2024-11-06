import React from 'react'
import {arrowLeftHover, arrowLeftNormal, arrowRightHover, arrowRightNormal} from '../../../../assets/Dashboard/index.js'
import IconButton from './IconButton.js';
import Page from './Page.js';

function Pagination() {

  return (
    <div className={`flex justify-center items-center min-h-9 min-w-56 `}>
        <div className={`grid grid-cols-5 gap-2`}>
            <IconButton 
                sourceHover={arrowLeftHover}
                sourceNormal={arrowLeftNormal}
                key={1}
                index={1}
            />
            <Page 
                active={true}
                pageNumber={1}
                key={2}
            />
            <Page 
                active={false}
                pageNumber={2}
                key={3}
            />
            <Page 
                active={false}
                pageNumber={3}
                key={4}
            />
            <IconButton 
                sourceHover={arrowRightHover}
                sourceNormal={arrowRightNormal}
                key={5}
                index={2}
            />
        </div>
    </div>
  )
}

export default Pagination