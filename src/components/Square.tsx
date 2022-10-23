import { useAppContext } from "../contexts/AppContext";

import { VscChromeClose, VscCircleLargeOutline } from "react-icons/vsc";

interface Props {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => {
  const { winner } = useAppContext();

  return (
    <main
      className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 p-4 sm:h-24 sm:w-24 ${
        winner !== "None" ? "cursor-default" : "cursor-pointer"
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
