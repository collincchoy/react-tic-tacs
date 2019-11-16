import React, { useState } from 'react';

import { Board } from '../Board';

type GameState = {
  winner?: string,
  currentPlayer: string,
}

export function Game() {
  const [state, setState] = useState<GameState>({
    currentPlayer: 'X',
  });
  return (
    <GameContext.Provider value={[state, setState]}>
      <Board />
    </GameContext.Provider>
  )
}

export const GameContext = React.createContext<[GameState, (newState: GameState) => void]>([{
  currentPlayer: 'X'
}, (newState) => {}]);