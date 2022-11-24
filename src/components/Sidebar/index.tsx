import "./Sidebar.scss";
import { ReactComponent as BoardSVG } from "../../assets/board.svg";
import Logout from "../Logout";
import HideMenu from "../HideMenu";
import { useState } from "react";
import CreateBoard from "../CreateBoardButton";
import ShowMenu from "../ShowMenu";
import BoardItem from "../BoardItem";

const data = [
  { id: "lala123", name: "UI/UX Desing" },
  { id: "lala235", name: "Web Application" },
  {
    id: "laga423",
    name: "Project Tesla dfsdfsdfsd fsdfsdfdsfsdfsd sdfdsfsdfdsf sdfsdfsdfsd sdfsdf sdfdsfsdfdsfdsfsdfdssfsdfdsf",
  },
];
const Sidebar = () => {
  const [isHide, setIsHide] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
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
          <HideMenu onHide={setIsHide} isHide={isHide} />
          <Logout />
        </div>
      </div>
      {isHide && <ShowMenu onHide={setIsHide} />}
    </nav>
  );
};

export default Sidebar;
