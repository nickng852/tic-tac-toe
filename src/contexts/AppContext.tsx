import { createContext, useContext, useState } from "react";

interface AppContextInterface {
  initialBoardState: string[][];
  board: string[][];
  setBoard: (board: string[][]) => void;
  player: string;
  setPlayer: (player: string) => void;
  winner: string;
  setWinner: (winner: string) => void;
  handleClick: (index: number, secondIndex: number) => void;
  checkWin: () => void;
  resetBoard: () => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const Context = createContext({} as AppContextInterface);

export const AppContext = ({ children }: ChildrenProps) => {
  const initialBoardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [board, setBoard] = useState<string[][]>(initialBoardState);
  const [player, setPlayer] = useState<string>("X");
  const [winner, setWinner] = useState<string>("None");

  const handleClick = (index: number, secondIndex: number) => {
    // disbale click when a player wins
    if (winner !== "None") return;
    // disbale click when a player placed on that square
    if (board[index][secondIndex] !== "") return;

    const newBoard = [...board];
    newBoard[index][secondIndex] = player;
    setBoard(newBoard);

    if (player === "X") {
      setPlayer("O");
    } else if (player === "O") {
      setPlayer("X");
    }

    checkWin();
  };

  const checkWin = () => {
    // horizontal
    for (let i = 0; i < board.length; i++) {
      if (board[i].every((value) => value === "X")) {
        setWinner("X");
      } else if (board[i].every((value) => value === "O")) {
        setWinner("O");
      }
    }

    // vertical
    for (let i = 0; i < board.length; i++) {
      const column = board.map((item) => item[i]);
      if (column.every((value) => value === "X")) {
        setWinner("X");
      } else if (column.every((value) => value === "O")) {
        setWinner("O");
      }
    }

    //diagonal 1
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    if (diagonal1.every((value) => value === "X")) {
      setWinner("X");
    } else if (diagonal1.every((value) => value === "O")) {
      setWinner("O");
    }

    //diagonal 2
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal2.every((value) => value === "X")) {
      setWinner("X");
    } else if (diagonal2.every((value) => value === "O")) {
      setWinner("O");
    }
  };

  const resetBoard = () => {
    setBoard(initialBoardState);
    setWinner("None");
  };

  return (
    <Context.Provider
      value={{
        initialBoardState,
        board,
        setBoard,
        player,
        setPlayer,
        winner,
        setWinner,
        handleClick,
        checkWin,
        resetBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
