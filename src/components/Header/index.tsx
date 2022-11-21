import InputSearch from "../InputSearch";
import InputToggle from "../InputToggle";
import Profile from "../Profile";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <div className="Header__container">
        <h1 className="Header__logo">
          <a href="#">Smartask</a>
        </h1>
        <div className="Header__section">
          <h2>UI/UX Design</h2>
          <div className="Header__section_menu">
            <InputToggle />
            <InputSearch />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
