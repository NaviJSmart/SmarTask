
import Task from "../Task";
import { ReactComponent as More } from "../../assets/more.svg";
import "./TaskBoard.scss";
import { Column } from "../../types/board";

type columnTaskProp = {columnTask: Column}
const TaskBoard = ({columnTask}: columnTaskProp) => {
  const {taskProcess, color, tasks,} = columnTask
  console.log(columnTask);
  return (
    <div className="TaskBoard">
      <div className="TaskBoard__menu">
        <div className="TaskBoard__menu-group">
          <div className="TaskBoard__color" style={{backgroundColor: `${color}`}}></div>
          <div className="TaskBoard__title">{taskProcess}</div>
        </div>

        <div className="TaskBoard__btn-more">
          <More />
        </div>
      </div>
      <div className="TaskBoard__Task">
        {tasks && tasks.map(item => (
          <Task key={item.id} task={item}/>
        ))}
      </div>
      <button className="TaskBoard__btn">ADD TASK</button>
    </div>
  );
};

export default TaskBoard;
