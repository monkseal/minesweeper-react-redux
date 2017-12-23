import React from "react";
import Board from "./Board";
import logo from "../logo.svg";
import "./style/Minesweeper.css";

const Minesweeper = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title"> React - fun fun fun</h1>
    </header>
    <Board />

  </div>
)

export default Minesweeper;
