import React from "react";
import { ReactComponent as ShowSVG } from "../../assets/show.svg";
import { useAppDispatch } from "../../hooks/redux";
import { onToggleMenu } from "../../store/reducers/menuToggleReducer";
import './ShowMenu.scss'

const ShowMenu = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div className="ShowMenu">
      <button onClick={() => dispatch(onToggleMenu())}>
        <ShowSVG width="25" height="25" />
      </button>
    </div>
  );
};

export default ShowMenu;
