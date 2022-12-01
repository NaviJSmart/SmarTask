import  { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSelected } from "../../store/reducers/boardsReducer";
import { getTaskColumns } from "../../store/reducers/tasksReducer";
import "./BoardItem.scss";
interface BoardItemProps {
  id: string;
  title: string;
}
const BoardItem = ({ title, id }: BoardItemProps) => {
  const { selectedBoard } = useAppSelector((state) => state.dashboards);
  const dispatch = useAppDispatch();
  const activeItem = selectedBoard?.id === id ? `active` : "";

 

  const onClickHandle = () => {
    dispatch(setSelected({ id, title }));
    dispatch(getTaskColumns(id));
  };
  return (
    <li className="BoardItem" onClick={onClickHandle}>
      <a href="#" className={activeItem}>
        {title}
      </a>
    </li>
  );
};

export default BoardItem;
