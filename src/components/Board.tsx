import { VscChromeClose, VscCircleLargeOutline } from "react-icons/vsc";

import { useAppContext } from "../contexts/AppContext";

import ActionButton from "./ActionButton";
import Square from "./Square";

const Board = () => {
  const { board, player, handleClick, resetBoard } = useAppContext();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-lg">Tic Tac Toe</h1>
        <p className="flex items-center justify-center gap-2 font-light">
          Now is
          <span>
            {player === "X" && <VscChromeClose size={20} />}
            {player === "O" && <VscCircleLargeOutline size={20} />}
          </span>
          's turn.
        </p>
        <ActionButton color="light" text="Restart" onClick={resetBoard} />
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
