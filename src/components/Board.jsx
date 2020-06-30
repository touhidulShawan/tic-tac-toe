import React, { Component } from "react";

import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareValue: Array(9).fill(null),
      xIsNext: true,
    };
  }
  //   render each square
  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squareValue[i]}
        clicked={() => this.handleClick(i)}
      />
    );
  };

  //   handle square click
  handleClick = (i) => {
    const squares = [...this.state.squareValue];

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squareValue: squares, xIsNext: !this.state.xIsNext });
  };

  //   calculate winner

  calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line in lines) {
      const [a, b, c] = lines[line];
      if (square[a] && square[a] === square[b] && square[c]) {
        return square[a];
      }
    }
    return null;
  };

  render() {
    const winner = this.calculateWinner(this.state.squareValue);

    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
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

export default Board;
