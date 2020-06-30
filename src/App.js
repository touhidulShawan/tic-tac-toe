import React from "react";
import "./App.scss";

import Board from "./components/board/Board";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <div className="container">
        <Board />
      </div>
    </div>
  );
};

export default App;
