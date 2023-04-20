import React, { useState } from "react";
import Square from "../SquareBox/Square";

import "../MainBoard/Board.css";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      } 
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (board[index] !== null) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = isXTurn ? "X" : "O";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <>
      <div className="heading">Tic Tac Toe Game</div>
      <div className="main-board">
        <div className="board-container">
          {isWinner ? (
            <>
              <h2>Player of {isWinner} won the game </h2>
              <button className="btn-playagain" onClick={handleReset}>
                Play Again
              </button>
            </>
          ) : (
            <>
              <h4>Player {isXTurn ? "X" : "O"} please move</h4>
              
              <div className="board-row">
                <Square onClick={() => handleClick(0)} value={board[0]} />
                <Square onClick={() => handleClick(1)} value={board[1]} />
                <Square onClick={() => handleClick(2)} value={board[2]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(3)} value={board[3]} />
                <Square onClick={() => handleClick(4)} value={board[4]} />
                <Square onClick={() => handleClick(5)} value={board[5]} />
              </div>
              <div className="board-row">
                <Square onClick={() => handleClick(6)} value={board[6]} />
                <Square onClick={() => handleClick(7)} value={board[7]} />
                <Square onClick={() => handleClick(8)} value={board[8]} />
              </div>

              <button className="btn-playagain" onClick={handleReset}>Reset</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Board;