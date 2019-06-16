import React from 'react';
import logo from './logo.svg';
import './Game.css';
import Board from './board/Board'

function Game() {
  return (
    <div>
      <Board />
      <span>Powered by: 
        <img src={logo} width="50px" height = "50px" alt='react-logo'/>
      </span>
    </div>
  );
}

export default Game;
