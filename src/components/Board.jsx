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

  render() {
    const status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
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
