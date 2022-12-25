import "./Task.scss";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { TaskType } from "../../types/board";
import { Draggable } from "react-beautiful-dnd";
import { useAppDispatch } from "../../hooks/redux";
import { setSelectedColumn, setSelectedTask } from "../../store/reducers/allBoardsReducer";
import { onModalEdit, onToggleModal } from "../../store/reducers/modalReducer";
interface TaskTypeProps  {
  task: TaskType,
  index: number,
  columnId: string
}
const Task = ({ task, index, columnId }: TaskTypeProps) => {
  const {sub_title, description, id} = task
  const dispatch = useAppDispatch()
  const onClickHandle = () => {
    dispatch(setSelectedColumn(columnId))
    dispatch(setSelectedTask(id))
    dispatch(onToggleModal('taskModal'))
    dispatch(onModalEdit(true))
  }
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div className="Task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="Task__header">
          <h4 className="Task__title">{sub_title}</h4>
          <button className="Task__menu" onClick={onClickHandle}>
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
