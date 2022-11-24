import React from "react";
import { ReactComponent as ShowSVG } from "../../assets/show.svg";
import './ShowMenu.scss'
interface Hide {
    onHide: React.Dispatch<React.SetStateAction<boolean>>;
   
  }
const ShowMenu = ({onHide}: Hide) => {
  return (
    <div className="ShowMenu">
      <button onClick={() => onHide(false)}>
        <ShowSVG width="25" height="25" />
      </button>
    </div>
  );
};

export default ShowMenu;
