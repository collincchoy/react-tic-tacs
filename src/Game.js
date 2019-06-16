import React from 'react';
import logo from './logo.svg';
import './Game.css';
import Board from './board/Board'

function Game() {
  return (
    <div className="Game">
      <Board />
      <span>Powered by: 
        <img src={logo} className="react-logo" alt='react-logo'/>
      </span>
    </div>
  );
}

export default Game;
