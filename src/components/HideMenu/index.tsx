import React from "react";
import { ReactComponent as HideSVG } from "../../assets/hide.svg";

import "./HideMenu.scss";

interface Hide {
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
  isHide: boolean;
}

const HideMenu = ({ onHide, isHide }: Hide) => {
  return (
    <div className="HideMenu">
      <HideSVG />
      <button onClick={() => onHide(true)}>Hide Menu</button>
    </div>
  );
};

export default HideMenu;
