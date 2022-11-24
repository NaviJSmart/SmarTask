import React from "react";
import "./BoardItem.scss";
interface BoardItemProps {
  id: string;
  name: string;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  selected: string | null;
}
const BoardItem = ({ id, name, setSelected, selected }: BoardItemProps) => {
  const activeItem = selected === id ? `active` : "";

  return (
    <li className="BoardItem" onClick={() => setSelected(id)}>
      <a href="#" className={activeItem}>
        {name}
      </a>
    </li>
  );
};

export default BoardItem;
