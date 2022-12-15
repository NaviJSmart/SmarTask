import "./Task.scss";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { TaskType } from "../../types/board";
import { Draggable } from "react-beautiful-dnd";
const Task = ({ task, index }: { task: TaskType, index: number }) => {
  const {sub_title, description, id} = task
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div className="Task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="Task__header">
          <h4 className="Task__title">{sub_title}</h4>
          <button className="Task__menu">
            <Edit />
          </button>
        </div>
        <p className="Task__description">
          {description}
        </p>
      </div>
      )}
    
    </Draggable>
  );
};

export default Task;
