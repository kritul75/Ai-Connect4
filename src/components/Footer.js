import React from 'react'
import '../index.css';

const Footer = ({onNewGameEvent, onSuggestEvent}) => {
  return (
    <div>
      <div className='foot'>
        <button onClick={onNewGameEvent} className='foot-text'><b>New Game</b></button>
        <button onClick={onSuggestEvent} className='foot-text'><b>Suggest</b></button>
      </div>
    </div>
  )
}

export default Footer
