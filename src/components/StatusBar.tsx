import React from 'react';
import { useGameContext } from './Game/GameContext';

export function StatusBar() {
  const {currentPlayer, winner, isGameOver} = useGameContext();

  if (!isGameOver()) {
    return <h2>Current Player: {currentPlayer}</h2>;
  }
  return <h2>Game Over! Winner: {winner}</h2>
}