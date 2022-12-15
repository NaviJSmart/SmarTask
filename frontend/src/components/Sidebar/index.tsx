import "./Sidebar.scss";
import { ReactComponent as BoardSVG } from "../../assets/board.svg";
import HideMenu from "../HideMenu";
import CreateBoard from "../CreateBoardButton";
import ShowMenu from "../ShowMenu";
import BoardItem from "../BoardItem";
import InputToggle from "../InputToggle";
import { useAppSelector } from "../../hooks/redux";




const Sidebar = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const {boards} = useAppSelector(state => state.allBoards)

  return (
    <nav className={`Sidebar ${isHide ? "hide" : ""}`}>
      <div className="Sidebar__menu">
        <div className="Sidebar__menu_nav">
          <a href="#" className="Sidebar__navigation">
            <BoardSVG />
            <p>Dashboards</p>
          </a>
          <ul className="Sidebar__menu_items">
            {boards.length >= 1 && boards.map((item: any) => (
              <BoardItem
                key={item.id}
                {...item}
               
              />
            ))}
          </ul>
          <CreateBoard />
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
