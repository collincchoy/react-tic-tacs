import React, { useState } from 'react';

import { Board } from '../Board';
import { StatusBar } from '../StatusBar';

type GameState = {
  winner: string,
  currentPlayer: string,
}

export function Game() {
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | undefined>();
  return (
    <GameContext.Provider value={{currentPlayer, setCurrentPlayer, winner, setWinner}}>
      <Board />
      <StatusBar />
    </GameContext.Provider>
  )
}

type GameContextType = {
  currentPlayer: string,
  setCurrentPlayer: (newPlayer: string) => void,
  winner: string | undefined,
  setWinner: (newWinner: string) => void,
}

export const GameContext = React.createContext<GameContextType>({
  currentPlayer: '', setCurrentPlayer: () => null,
  winner: undefined, setWinner: () => null,
});