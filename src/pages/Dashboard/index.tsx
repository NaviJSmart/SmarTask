import React from "react";
import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppSelector } from "../../hooks/redux";
import "./Dashboard.scss";

const Dashboard = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";

  return (
    <div className={activeBoard}>
      <NavTitle/>
      <div className="Dashboard__TaskBoard">
        <TaskBoard />
        <TaskBoard />
        
        
      </div>
    </div>
  );
};

export default Dashboard;
