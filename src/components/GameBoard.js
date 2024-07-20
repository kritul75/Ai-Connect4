import React, {useEffect, useState} from 'react';
import GameButton from './GameButton';
import {index} from '../index.css';
import Header from './Header';
import Footer from './Footer.js';
import {checkWin, isDraw, computerMove} from './helper.js';
import {noOfCircles,noPlayer,Player_1,Player_2,GameState_Wins,GameState_Playing, GameState_Draw} from '../Constants.js'


const GameBoard = () => {

    

   const [boardId,setBoardId] = useState(Array(16).fill(noPlayer));
   const [currentPlayer, setCurrentPlayer]= useState(Player_1);
   const[gameState,setGameState]= useState(GameState_Playing);
   const[winner,setWinner] = useState();

   useEffect(()=>{
    initGame();
   },[])

   const initGame=()=>{
      setBoardId(Array(16).fill(noPlayer));
      setCurrentPlayer(Player_1);
      setGameState(GameState_Playing);
 
   }
   
   const initBoard=()=>{
    const circles=[];
    for(let i=0;i<noOfCircles;i++){
        circles.push(renderCircle(i));
    }
    return circles;
   }

   console.log(boardId);

   const suggestMove=()=>{
    circleClicked(computerMove(boardId));
   }
   
   const circleClicked=(id)=>{

    if(boardId[id]!==0) return;
    if(gameState===GameState_Wins) return;

       setBoardId(prev=>{
        return prev.map((circle,pos)=>{
            if(pos===id) return currentPlayer;
            return circle;
        })
       })  
       
       if(checkWin(boardId,id,currentPlayer)===true){
          setGameState(GameState_Wins);
          setWinner(currentPlayer);
       }

       if(isDraw(boardId,id,currentPlayer)===true){
        setGameState(GameState_Draw);
        setWinner(noPlayer);
     }

       setCurrentPlayer(currentPlayer===Player_1?Player_2:Player_1);
   }

   const renderCircle=(id)=>{
      return <GameButton key={id} id={id} ClassName={`player_${boardId[id]}`}  onCircleClick={circleClicked}/>
   }

  return (
    <>
      <div><Header currentPlayer={currentPlayer} winner={winner} gameState={gameState}/></div>
      <div className='board'>
         {initBoard()}
      
      </div>
      <div><Footer onSuggestEvent={suggestMove} onNewGameEvent={initGame}/></div>
    </>
  )
}

export default GameBoard
