import React from 'react'
import "../index.css";
import { GameState_Draw, GameState_Playing,GameState_Wins } from '../Constants';

const Header = ({currentPlayer,winner,gameState}) => {

  const renderPlayer=()=>{
     switch (gameState){
       case GameState_Playing: 
           return <div><b>Player {currentPlayer} Turn</b></div>;
       case GameState_Wins: 
           return <div style={{color:"red"}}><b>Player {winner} Wins</b></div>;
       case GameState_Draw: 
           return <div style={{color:"red"}}><b>Game Draw!</b></div>;
     }
     
  }

  return (
    <div className='head'>
      <div className='head-body'>{renderPlayer()}</div>
    </div>
  )
}

export default Header
