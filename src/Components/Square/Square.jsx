import React from "react";
import s from "./Square.module.css";

const Square = (props) => {
  return (
    <button className={s.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
