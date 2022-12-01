import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSelected } from "../../store/reducers/boardsReducer";
import "./BoardItem.scss";
interface BoardItemProps {
  id: string;
  title: string;
  setSelected: React.Dispatch<React.SetStateAction<{} | null>>;
  selected: {id: string;
    title: string;};
}
const BoardItem = ({ title, id}: BoardItemProps) => {
  const {selectedBoard} = useAppSelector(state => state.dashboards)
  const dispatch = useAppDispatch()
  const activeItem = selectedBoard?.id === id ? `active` : "";

  return (
    <li className="BoardItem" onClick={() => dispatch(setSelected({id, title}))}>
      <a href="#" className={activeItem}>
        {title}
      </a>
    </li>
  );
};

export default BoardItem;
