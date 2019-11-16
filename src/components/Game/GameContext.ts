import { useContext } from "react";
import { GameContext } from "./Game";
import { checkForEndGame } from '../../utils/Game';

export const useGameContext = () => {
  const [state, setState] = useContext(GameContext);
  const changePlayer = () => {
    if (state.currentPlayer === 'X') {
      setState({...state, currentPlayer: 'Y'});
    } else {
      setState({ ...state, currentPlayer: 'X'});
    }
  }

  function update(board: string[]) {
    const winner = checkForEndGame(board);
    if (winner) {
      setState({ ...state, winner: winner});
    }
  }

  return {
    currentPlayer: state.currentPlayer,
    changePlayer,
    update,
    winner: state.winner,
    isGameOver: () => !!state.winner,
  }
}