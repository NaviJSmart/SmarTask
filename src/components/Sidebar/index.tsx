import "./Sidebar.scss";
import { ReactComponent as Board } from "../../assets/board.svg";
import { ReactComponent as Hide } from "../../assets/hide.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
const Sidebar = () => {
  return (
    <nav className="Sidebar">
      <div className="Sidebar__menu">
        <div className="Sidebar__menu_nav">
          <a href="#" className="Sidebar__navigation">
            <Board />
            <p>Dashboards</p>
          </a>
          <ul className="Sidebar__menu_items">
            <li>
              <a href="#">UI/UX Desing</a>
            </li>
            <li>
              <a href="#">Web Application</a>
            </li>
            <li>
              <a href="#">Project R</a>
            </li>
          </ul>
          <div className="Sidebar__menu_button">
            <button>+Create New Board</button>
          </div>
        </div>
        <div className="Sidebar__menu_features">
          <div className="Sidebar__hide menu_bottom">
            <Hide />
            <p>Hide Menu</p>
          </div>
          <div className="Sidebar__logout menu_bottom">
            <Logout />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
