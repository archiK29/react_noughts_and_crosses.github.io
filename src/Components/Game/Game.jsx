import React, { useState } from "react";
import s from "./Game.module.css";
import Board from "../Board/Board";
import { calculateWinner } from "../../helper.js";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    // определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    // определить чей ход
    boardCopy[index] = xIsNext ? "X" : "0";
    // обновить стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className={s.start__btn}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
    );
  };

  return (
    <div className={s.wrapper}>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className={s.game__info}>
        {winner
          ? "Победитель " + winner
          : "Cейчас ходит " + (xIsNext ? "X" : "0")}
      </p>
    </div>
  );
};

export default Game;
