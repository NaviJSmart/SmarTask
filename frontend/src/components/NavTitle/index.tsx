import { useAppSelector } from "../../hooks/redux";
import { allBoardsSelector } from "../../store/reducers/allBoardsReducer";
import { trancateStr } from "../../utils/trancateStr";
import "./NavTitle.scss";

const NavTitle = () => {
  const { selectedBoard } = useAppSelector(allBoardsSelector);
  const contructTitle = trancateStr(selectedBoard?.title, 16, 16);
  return <h2 className="NavTitle">{contructTitle}</h2>;
};

export default NavTitle;
