import Square from "./Square";

interface BoardProps{
  squares: string[];
  xIsNext: boolean;
  onPlay: (newSquares:string[]) => void;
}

function calculateWinner(squares: string[]): string | null {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}


function Board(props: BoardProps) {
  
  const winner = calculateWinner(props.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${props.xIsNext ? "X" : "O"}`;

  function handleClick(index:number) {
    //base case 
    if(calculateWinner(props.squares) || props.squares[index]) return;

    //create a copy of the squares array
    const newSquares = props.squares.slice();
    //set the value of the square that was clicked
    newSquares[index] = props.xIsNext ? "X" : "O";
    //update the squares array with the new value
    props.onPlay(newSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={props.squares[0]} onClick={() => handleClick(0)} />
        <Square value={props.squares[1]} onClick={() => handleClick(1)} />
        <Square value={props.squares[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={props.squares[3]} onClick={() => handleClick(3)} />
        <Square value={props.squares[4]} onClick={() => handleClick(4)} />
        <Square value={props.squares[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={props.squares[6]} onClick={() => handleClick(6)} />
        <Square value={props.squares[7]} onClick={() => handleClick(7)} />
        <Square value={props.squares[8]} onClick={() => handleClick(8)} />
      </div>


    </>
  );
}

export default Board;
