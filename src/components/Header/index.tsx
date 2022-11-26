import InputSearch from "../InputSearch";
import InputToggle from "../InputToggle";
import Logo from "../Logo";
import Profile from "../Profile";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__logo">
          <Logo />
        </div>
        <div className="Header__section">
          <InputSearch />
          <div className="Header__section_menu">
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
