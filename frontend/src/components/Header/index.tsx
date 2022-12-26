import { useAppSelector } from "../../hooks/redux";
import Logo from "../Logo";
import MoreButton from "../MoreButton";
import NavTitle from "../NavTitle";
import "./Header.scss";

const Header = (): JSX.Element => {
  const { selectedBoard } = useAppSelector((state) => state.allBoards);
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__logo">
          <Logo />
        </div>
        <div className="Header__section">
          <NavTitle />
          {selectedBoard && <MoreButton id={selectedBoard.id} type="board" />}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
