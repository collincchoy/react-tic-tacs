import { useContext } from "react";
import { GameContext } from "./Game";
import { checkForEndGame } from '../../utils/Game';

export const useGameContext = () => {
  const {currentPlayer, setCurrentPlayer, winner, setWinner} = useContext(GameContext);
  const changePlayer = () => {
    if (currentPlayer === 'X') {
      setCurrentPlayer('Y');
    } else {
      setCurrentPlayer('X');
    }
  }

  const update = (board: string[]) => {
    const winner = checkForEndGame(board);
    console.log(`the wiener is ${winner}`);
    if (winner) {
      setWinner(winner);
    }
    console.log(currentPlayer, winner);
  }

  const isGameOver = () => !!winner;

  return {
    currentPlayer,
    changePlayer,
    update,
    winner,
    isGameOver,
  }
}