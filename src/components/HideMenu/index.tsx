import React from "react";
import { ReactComponent as HideSVG } from "../../assets/hide.svg";
import { useAppDispatch } from "../../hooks/redux";
import { onToggleMenu } from "../../store/reducers/menuToggleReducer";

import "./HideMenu.scss";



const HideMenu = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="HideMenu">
      <HideSVG />
      <button onClick={() => dispatch(onToggleMenu())}>Hide Menu</button>
    </div>
  );
};

export default HideMenu;
