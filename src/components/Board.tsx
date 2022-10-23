import { useAppContext } from "../contexts/AppContext";

import ActionButton from "./ActionButton";
import Square from "./Square";

const Board = () => {
  const { board, player, winner, handleClick, resetBoard } = useAppContext();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-lg">Tic Tac Toe</h1>
        <p className="font-light">
          Next player: <span>{player}</span>
        </p>
        <p className="font-light">
          Winner: <span>{winner}</span>
        </p>
        <ActionButton color="light" text="Reset" onClick={resetBoard} />
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <Square value={board[0][0]} onClick={() => handleClick(0, 0)} />
          <Square value={board[0][1]} onClick={() => handleClick(0, 1)} />
          <Square value={board[0][2]} onClick={() => handleClick(0, 2)} />
        </div>
        <div className="flex gap-6">
          <Square value={board[1][0]} onClick={() => handleClick(1, 0)} />
          <Square value={board[1][1]} onClick={() => handleClick(1, 1)} />
          <Square value={board[1][2]} onClick={() => handleClick(1, 2)} />
        </div>
        <div className="flex gap-6">
          <Square value={board[2][0]} onClick={() => handleClick(2, 0)} />
          <Square value={board[2][1]} onClick={() => handleClick(2, 1)} />
          <Square value={board[2][2]} onClick={() => handleClick(2, 2)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
