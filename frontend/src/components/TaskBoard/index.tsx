import Task from "../Task";
import "./TaskBoard.scss";
import { Column } from "../../types/board";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useAppDispatch } from "../../hooks/redux";
import { onToggleModal } from "../../store/reducers/modalReducer";
import { setSelectedColumn } from "../../store/reducers/allBoardsReducer";
import MoreButton from "../MoreButton";

type columnTaskProp = { columnTask: Column; idx: number };
const TaskBoard = ({ columnTask, idx }: columnTaskProp) => {
  const { taskProcess, color, tasks, id  } = columnTask;
  const dispatch = useAppDispatch()
  const onClickHandle = () => {
    dispatch(setSelectedColumn(id));
    dispatch(onToggleModal('taskModal'));
  }
  return (
    <Draggable draggableId={id} index={idx}>
      {(provided) => (
        <div
          className="TaskBoard"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="TaskBoard__menu" {...provided.dragHandleProps}>
            <div className="TaskBoard__menu-group">
              <div
                className="TaskBoard__color"
                style={{ backgroundColor: `${color}` }}
              ></div>
              <div className="TaskBoard__title">{taskProcess}</div>
            </div>

           <MoreButton id={id} type="column"/>
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
                    <Task key={item.id} task={item} index={i} columnId={id} />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <button className="TaskBoard__btn" onClick={onClickHandle}>ADD TASK</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskBoard;
