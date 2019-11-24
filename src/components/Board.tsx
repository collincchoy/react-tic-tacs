import React from 'react';
import './Board.css';
import { Cell } from './Cell';

interface BoardProps {
  cells: string[],
  onCellClick: (index: number) => void,
  size?: number;
}

export function Board(props: BoardProps) {
  const {cells, onCellClick} = props,
        {size=Math.floor(Math.sqrt(cells.length))} = props;

  return (
    <div className="Board" >
      {cells.map((token, index) => 
        <Cell 
          value={token} 
          row={ Math.floor(index/size) }
          col={ index % size }
          key={ index }
          onClick={() => onCellClick(index)}
        />
      )}
    </div>
  );
}
