import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface AppContextInterface {
  initialBoardState: string[][];
  board: string[][];
  setBoard: (board: string[][]) => void;
  player: string;
  setPlayer: (player: string) => void;
  winner: string;
  setWinner: (winner: string) => void;
  handleClick: (index: number, secondIndex: number) => void;
  checkResult: () => void;
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

  useEffect(() => {
    if (winner === "X") {
      toast("X won!", {
        icon: "👏🏼",
      });
    } else if (winner === "O") {
      toast("O won!", {
        icon: "👏🏼",
      });
    } else if (winner === "Draw") {
      toast("It a draw!", {
        icon: "🙌🏼",
      });
    }
  }, [winner]);

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

    checkResult();
  };

  const checkResult = () => {
    // draw
    const row = board.map((item) => item);
    const allRows = row.flat();
    if (allRows.every((value) => value !== "")) {
      setWinner("Draw");
    }

    // win (horizontal)
    for (let i = 0; i < board.length; i++) {
      if (board[i].every((value) => value === "X")) {
        setWinner("X");
      } else if (board[i].every((value) => value === "O")) {
        setWinner("O");
      }
    }

    // win (vertical)
    for (let i = 0; i < board.length; i++) {
      const column = board.map((item) => item[i]);
      if (column.every((value) => value === "X")) {
        setWinner("X");
      } else if (column.every((value) => value === "O")) {
        setWinner("O");
      }
    }

    // win (diagonal 1)
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    if (diagonal1.every((value) => value === "X")) {
      setWinner("X");
    } else if (diagonal1.every((value) => value === "O")) {
      setWinner("O");
    }

    // win (diagonal 2)
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
        checkResult,
        resetBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
