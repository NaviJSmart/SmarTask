import React from "react";
import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppSelector } from "../../hooks/redux";
import "./Dashboard.scss";
interface DashboardProps {
  selected: { id: string; name: string } | null;
}
const Dashboard = ({ selected }: DashboardProps) => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";

  return (
    <div className={activeBoard}>
      <NavTitle selected={selected} />
      <div className="Dashboard__TaskBoard">
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
        <TaskBoard />
        
      </div>
    </div>
  );
};

export default Dashboard;
