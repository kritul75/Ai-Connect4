import React from 'react'
import {index} from '../index.css';


const GameButton = ({id,ClassName,onCircleClick}) => {
 
    const clicked= (id)=>{
       onCircleClick(id);
    }


  return (
    <button className={`circle ${ClassName}`} onClick={()=>clicked(id)}>
      
    </button>
  )
}

export default GameButton
