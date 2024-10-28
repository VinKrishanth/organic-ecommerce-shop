import React  from 'react'
import DefaultButton from './Components/DefaultButton';

function QuickViewButton({onClick, ButtonHover,cardStyle, HoverIcon,Icon}) {
    return (
        <DefaultButton 
            ButtonHover={ButtonHover}
            Icon={Icon}
            HoverIcon={HoverIcon}
            onClick={onClick}
            cardStyle={cardStyle}
        />
      )
}

export default QuickViewButton