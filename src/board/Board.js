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

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      nextPlayer: 'X',
    }
  }

  determineNextPlayer() {
    return (this.state.nextPlayer === 'X') ? 'O' : 'X'
  }

  handleCellClick(i) {
    const cells = this.state.cells.slice()
    cells[i] = this.state.nextPlayer

    this.setState({
      'cells': cells,
      'nextPlayer': this.determineNextPlayer(),
    });
  }

  renderSquare(i) {
    return <Cell value={this.state.cells[i]} onClick={() => this.handleCellClick(i)}/>;
  }

  render() {
    return (
      <div>
        <div className="status">Next Player: {this.state.nextPlayer}</div>
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