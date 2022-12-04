import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Dashboard.scss";
import { OnDragEnd } from "../../utils/DragAndDrop";
import { updateTaskCol } from "../../store/reducers/tasksReducer";
import CreateColumn from "../../components/CreateColumnButton";

const Dashboard = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";
  const { taskColumns } = useAppSelector((state) => state.tasksBoard);
  const dispatch = useAppDispatch();

  return (
    <div className={activeBoard}>
      <NavTitle />
      <DragDropContext
        onDragEnd={(res) => OnDragEnd(res, {taskColumns, dispatch, updateTaskCol})}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div className="Dashboard__TaskBoard" {...provided.droppableProps}
             ref={provided.innerRef}>
              {taskColumns.map((item, i) => (
                <TaskBoard key={item.id} columnTask={item} idx={i} />
              ))}
              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
