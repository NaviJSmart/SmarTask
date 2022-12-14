import { useState } from "react";
import Task from "../Task";
import { ReactComponent as MoreSVG } from "../../assets/more.svg";
import "./TaskBoard.scss";
import { Column } from "../../types/board";
import { Draggable, Droppable } from "react-beautiful-dnd";
import EditModal from "../Modals/EditModal";
import { useAppDispatch } from "../../hooks/redux";
import { onToggleModal } from "../../store/reducers/modalReducer";
import { setSelectedColumn } from "../../store/reducers/allBoardsReducer";

type columnTaskProp = { columnTask: Column; idx: number };
const TaskBoard = ({ columnTask, idx }: columnTaskProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const { taskProcess, color, tasks, id  } = columnTask;
  const dispatch = useAppDispatch()
  const onClickHandle = () => {
    dispatch(setSelectedColumn(id));
    dispatch(onToggleModal('createTask'));
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

            <div className="TaskBoard__btn-more">
              <button onClick={() => setIsOpen(!isOpen)}>
                <MoreSVG />
              </button>
              {isOpen ? <EditModal id={id} setIsOpen={setIsOpen} type='column'/> : null}
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
          <button className="TaskBoard__btn" onClick={onClickHandle}>ADD TASK</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskBoard;
