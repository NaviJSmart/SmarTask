import "./Sidebar.scss";
import { ReactComponent as BoardSVG } from "../../assets/board.svg";
import HideMenu from "../HideMenu";
import CreateBoard from "../CreateBoardButton";
import ShowMenu from "../ShowMenu";
import BoardItem from "../BoardItem";
import InputToggle from "../InputToggle";
import { useAppSelector } from "../../hooks/redux";
import { allBoardsSelector } from "../../store/reducers/allBoardsReducer";

const Sidebar = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const { boards } = useAppSelector(allBoardsSelector);

  return (
    <nav className={`Sidebar ${isHide ? "hide" : ""}`}>
      <div className="Sidebar__menu">
        <div className="Sidebar__menu_nav">
          <div className="Sidebar__navigation">
            <BoardSVG />
            <p>Dashboards</p>
          </div>
          <ul className="Sidebar__menu_items">
            {boards.length >= 1 &&
              boards.map((item) => <BoardItem key={item.id} {...item} />)}
          </ul>
          <div className="Sidebar__menu_btn">
            <CreateBoard />
          </div>
        </div>
        <div className="Sidebar__menu_features">
          <InputToggle />
          <HideMenu />
        </div>
      </div>
      {isHide && <ShowMenu />}
    </nav>
  );
};

export default Sidebar;
