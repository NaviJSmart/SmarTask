import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSelectedBoard } from "../../store/reducers/allBoardsReducer";
import "./BoardItem.scss";
interface BoardItemProps {
  id: string;
  title: string;
}
const BoardItem = ({ title, id }: BoardItemProps) => {
  const { selectedBoard } = useAppSelector((state) => state.allBoards);
  const dispatch = useAppDispatch();
  const activeItem = selectedBoard?.id === id ? `active` : "";

  const onClickHandle = () => {
    dispatch(setSelectedBoard({ id, title }));
    
  };
  return (
    <li className="BoardItem" onClick={onClickHandle}>
      <button className={activeItem} disabled={!!activeItem}>
        {title}
      </button>
    </li>
  );
};

export default BoardItem;
