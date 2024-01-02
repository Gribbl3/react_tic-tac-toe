import Board from "./Board";
import { useState } from "react";

function Game() {
  //2d string array to store the history of the game
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    //if no spread operator, history will be like this:
    //[[a,b], a, b]
    //with spread operator, history will be like this:
    //[a,b,a,b]
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {
    setHistory(history.slice(0, nextMove + 1));
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((step, move) => {
    let description;
    move > 0
      ? (description = `Go to move #${move}`)
      : (description = "Go to game start");

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
