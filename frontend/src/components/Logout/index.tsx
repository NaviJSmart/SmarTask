import React from "react";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import './Logout.scss'
const Logout = () => {
  return (
    <div className="Logout">
      <LogoutIcon />
      <button>Logout</button>
    </div>
  );
};

export default Logout;
