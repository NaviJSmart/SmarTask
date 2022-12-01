import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppSelector } from "../../hooks/redux";
import "./Dashboard.scss";

const Dashboard = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";
  const { taskColumns } = useAppSelector((state) => state.tasksBoard);
  return (
    <div className={activeBoard}>
      <NavTitle />
      <div className="Dashboard__TaskBoard">
        {taskColumns.map((item) => (
          <TaskBoard key={item.id} columnTask={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
