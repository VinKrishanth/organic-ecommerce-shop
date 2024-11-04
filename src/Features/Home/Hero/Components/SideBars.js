import React from 'react'
import SideItem from './SideItem'
import CategoriesItems from '../../../../Components/Navigation/Categories/CategoriesItems.js'
import { useNavigate} from 'react-router-dom';

function SideBars() {
  const navigate = useNavigate();
  const handleClick = (item) =>{
    navigate(item);
  }

  return (
    <nav className={`min-w-[312px]  min-h-[560px]  border-2 border-Gray05 `}>
      <ul className={`list-none`}>
        {
          CategoriesItems.map((item, index) => {
            return(
                <SideItem 
                  ID={item.Id} 
                  sourceMainURL={item.SourceUrlNormal} 
                  sourceHoverURL={item.SourceUrlWhite} 
                  Title={item.SourceTitle}
                  key={index}
                  onClick = {()=> {handleClick(item.SourceSRC)}}
                />
            )
          })
        }
      </ul>
    </nav>
  )
}

export default SideBars