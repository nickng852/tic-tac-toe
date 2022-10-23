import { Button } from "flowbite-react";

interface Props {
  color: string;
  text: string;
  onClick: () => void;
}

const ActionButton = ({ color, text, onClick }: Props) => {
  return (
    <Button color={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ActionButton;
