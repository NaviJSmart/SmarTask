import "./Sidebar.scss";
import { ReactComponent as BoardSVG } from "../../assets/board.svg";
import Logout from "../Logout";
import HideMenu from "../HideMenu";
import { useEffect, useState } from "react";
import CreateBoard from "../CreateBoardButton";
import ShowMenu from "../ShowMenu";
import BoardItem from "../BoardItem";
import InputToggle from "../InputToggle";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getBoards } from "../../store/reducers/boardsReducer";

interface SideBarProps {
  setSelected: React.Dispatch<
    React.SetStateAction<{ id: string; name: string } | null>
  >;
  selected: { id: string; name: string } | null;
}


const Sidebar = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const {boards} = useAppSelector(state => state.dashboards)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getBoards())
  }, [dispatch])
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
