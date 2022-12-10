
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
          
          <div className="Header__section_menu">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
