import React, { useState } from 'react';

import { checkForEndGame } from '../../utils/Game';
import { Board } from '../Board';
import { StatusBar } from '../StatusBar';

function initializeBoard(size=9) {
  return new Array(size).fill('');
}

export function Game() {
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  function changePlayer() {
    if (currentPlayer === "X") {
      setCurrentPlayer("Y");
    } else {
      setCurrentPlayer("X");
    }
  }
  const [winner, setWinner] = useState<string | undefined>();

  const [board, setBoard] = useState<string[]>(initializeBoard());

  function boardIsFull() {
    for (const cell of board) {
      if (cell === "") {
        return false;
      }
    }
    return true;
  }

  function putToken(index: number) {
    if (board[index] || !!winner) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const resultOfTurn = checkForEndGame(newBoard);
    if (resultOfTurn) {
      setWinner(resultOfTurn);
    } else {
      changePlayer();
    }
  }
  return (
    <>
      <Board cells={board} onCellClick={putToken}/>
      <StatusBar
        reset={() => {
          setBoard(initializeBoard());
          setWinner(undefined);
        }}
        gameIsOver={!!winner || boardIsFull()}
        currentPlayer={currentPlayer}
      />
    </>
  )
}
