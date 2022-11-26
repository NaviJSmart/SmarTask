import React from "react";
import "./BoardItem.scss";
interface BoardItemProps {
  id: string;
  name: string;
  setSelected: React.Dispatch<React.SetStateAction<{} | null>>;
  selected: {id: string;
    name: string;};
}
const BoardItem = ({ name, id, setSelected, selected }: BoardItemProps) => {
  const activeItem = selected?.id === id ? `active` : "";

  return (
    <li className="BoardItem" onClick={() => setSelected({id, name})}>
      <a href="#" className={activeItem}>
        {name}
      </a>
    </li>
  );
};

export default BoardItem;
