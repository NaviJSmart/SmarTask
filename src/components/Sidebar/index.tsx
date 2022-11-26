import "./Sidebar.scss";
import { ReactComponent as BoardSVG } from "../../assets/board.svg";
import Logout from "../Logout";
import HideMenu from "../HideMenu";
import { useState } from "react";
import CreateBoard from "../CreateBoardButton";
import ShowMenu from "../ShowMenu";
import BoardItem from "../BoardItem";
import InputToggle from "../InputToggle";
import { useAppSelector } from "../../hooks/redux";

interface SideBarProps {
  setSelected: React.Dispatch<
    React.SetStateAction<{ id: string; name: string } | null>
  >;
  selected: { id: string; name: string } | null;
}

const data = [
  { id: "lala123", name: "UI/UX Desing" },
  { id: "lala235", name: "Web Application" },
  {
    id: "laga423",
    name: "Project Tesla dfsdfsdfsd fsdfsdfdsfsdfsd sdfdsfsdfdsf sdfsdfsdfsd sdfsdf sdfdsfsdfdsfdsfsdfdssfsdfdsf",
  },
];
const Sidebar = ({ selected, setSelected }: SideBarProps) => {
  const { isHide } = useAppSelector((state) => state.menuToggle);

  return (
    <nav className={`Sidebar ${isHide ? "hide" : ""}`}>
      <div className="Sidebar__menu">
        <div className="Sidebar__menu_nav">
          <a href="#" className="Sidebar__navigation">
            <BoardSVG />
            <p>Dashboards</p>
          </a>
          <ul className="Sidebar__menu_items">
            {data.map((item: any) => (
              <BoardItem
                key={item.id}
                {...item}
                setSelected={setSelected}
                selected={selected}
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
