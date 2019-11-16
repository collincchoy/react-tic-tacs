import React, { useState } from 'react';
import './Board.css';
import { useGameContext } from './Game/GameContext';
import { Cell } from './Cell';

interface BoardProps {
  size?: number;
}

export function Board(props: BoardProps) {
  const {size=3} = props;

  const [cells, setCells] = useState<string[]>(new Array(size*size).fill(''));

  interface Turn {
    token: string;
    index: number;
  }

  const {currentPlayer, changePlayer} = useGameContext();
  const putToken = (turn: Turn) => {
    console.log("click" + JSON.stringify(cells));
    if (cells[turn.index]) {
      return;
    }
    const newCells = cells.slice();
    newCells[turn.index] = turn.token;
    setCells(newCells);
    changePlayer();
  }

  return (
    <div className="Board" >
      {cells.map((token, index) => 
        <Cell 
          value={token} 
          row={ Math.floor(index/size) }
          col={ index % size }
          key={ index }
          onClick={() => putToken({token: currentPlayer, index: index})}
        />
      )}
    </div>
  );
}
