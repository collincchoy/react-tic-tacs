import React from 'react'

class Cell extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

function determineNextPlayer(currentPlayer) {
  return (currentPlayer === 'X') ? 'O' : 'X'
}

function calculateWinner(cells) {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let stateToCheck of winStates) {
    if (cells[stateToCheck[0]] === cells[stateToCheck[1]] &&
        cells[stateToCheck[1]] === cells[stateToCheck[2]])
      return cells[stateToCheck[0]]
  }
  return null
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      nextPlayer: 'X',
    }
  }

  handleCellClick(i) {
    let currentPlayer = this.state.nextPlayer
    if (calculateWinner(this.state.cells) || this.state.cells[i])
      return;

    const cells = this.state.cells.slice()
    cells[i] = currentPlayer

    this.setState({
      'cells': cells,
      'nextPlayer': determineNextPlayer(currentPlayer),
    });
  }

  renderSquare(i) {
    return <Cell value={this.state.cells[i]} onClick={() => this.handleCellClick(i)}/>;
  }

  render() {
    let gameStatus;
    const winner = calculateWinner(this.state.cells)
    if (winner) {
      gameStatus = 'Winner is: ' + winner;
    }
    else
      gameStatus = 'Next Player is: ' + this.state.nextPlayer 
    return (
      <div>
        <div className="status">{gameStatus}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board