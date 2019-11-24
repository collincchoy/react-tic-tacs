import React from 'react';

export interface StatusBarProps {
  reset: () => void,
  gameIsOver: boolean,
  currentPlayer: string,
}

export function StatusBar(props: StatusBarProps) {
  const {reset, gameIsOver, currentPlayer} = props;
  if (!gameIsOver) {
    return <h2>Current Player: {currentPlayer}</h2>;
  }
  return (
    <>
    <h2>Game Over! Winner: {currentPlayer}</h2>
    <button onClick={reset}>Play Again</button>
    </>
  );
}