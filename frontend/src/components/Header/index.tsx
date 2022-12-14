import { useState } from "react";
import { ReactComponent as MoreSVG } from "../../assets/more.svg";
import { useAppSelector } from "../../hooks/redux";
import Logo from "../Logo";
import EditModal from "../Modals/EditModal";
import "./Header.scss";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  const { selectedBoard } = useAppSelector((state) => state.allBoards);
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__logo">
          <Logo />
        </div>
        <div className="Header__section">
          {selectedBoard && (
            <div className="Header__section_menu">
              <button onClick={() => setIsOpen((prev) => !isOpen)}>
                <MoreSVG />
              </button>
              {isOpen ? <EditModal id={selectedBoard!.id} setIsOpen={setIsOpen} type='board' /> : null}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
