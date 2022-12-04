import Task from "../Task";
import { ReactComponent as More } from "../../assets/more.svg";
import "./TaskBoard.scss";
import { Column } from "../../types/board";
import { Draggable, Droppable } from "react-beautiful-dnd";

type columnTaskProp = { columnTask: Column; idx: number };
const TaskBoard = ({ columnTask, idx }: columnTaskProp) => {
  const { taskProcess, color, tasks, id } = columnTask;
 
  return (
    <Draggable draggableId={id} index={idx}>
      {(provided) => (
        <div className="TaskBoard" {...provided.draggableProps} ref={provided.innerRef} >
          <div className="TaskBoard__menu" {...provided.dragHandleProps}>
            <div className="TaskBoard__menu-group">
              <div
                className="TaskBoard__color"
                style={{ backgroundColor: `${color}` }}
              ></div>
              <div className="TaskBoard__title">{taskProcess}</div>
            </div>

            <div className="TaskBoard__btn-more">
              <More />
            </div>
          </div>
          <Droppable droppableId={id} type="task">
            {(provided) => (
              <div
                className="TaskBoard__Task"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks &&
                  tasks.map((item, i) => (
                    <Task key={item.id} task={item} index={i} />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <button className="TaskBoard__btn">ADD TASK</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskBoard;
