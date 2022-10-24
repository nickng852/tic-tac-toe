import { VscChromeClose, VscCircleLargeOutline } from "react-icons/vsc";

import { useAppContext } from "../contexts/AppContext";

interface Props {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => {
  const { winner } = useAppContext();

  return (
    <main
      className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 sm:h-24 sm:w-24 ${
        winner === null ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-center">
        {value === "X" && <VscChromeClose size={30} />}
        {value === "O" && <VscCircleLargeOutline size={30} />}
      </div>
    </main>
  );
};

export default Square;
