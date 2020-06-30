import React from "react";
import "./Square.scss";

const Square = (props) => (
  <button
    className={`square ${props.value === "X" ? "xPlayer" : "oPlayer"}`}
    onClick={props.clicked}
  >
    {props.value}
  </button>
);

export default Square;
