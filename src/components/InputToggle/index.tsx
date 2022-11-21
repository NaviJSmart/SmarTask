import React from "react";
import './InputToggle.scss'
import {ReactComponent as Moon} from '../../assets/moon.svg'
const InputToggle = () => {

  return (
    <div className="InputToggle">
        <Moon width="18" height="18" />
      <input type="checkbox" id="toggle-button" className="toggle-button" />
    </div>
  );
};

export default InputToggle;
