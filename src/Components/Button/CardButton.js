import React  from 'react'
import DefaultButton from './Components/DefaultButton';

function CardButton({onClick, ButtonHover, HoverIcon, Icon, cardStyle}) {
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

export default CardButton