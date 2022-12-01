import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./Dashboard.scss";
import { updateTaskCol } from "../../store/reducers/tasksReducer";

const Dashboard = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";
  const { taskColumns } = useAppSelector((state) => state.tasksBoard);
  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const [start] = taskColumns.filter(
      (item) => +item.id === +source.droppableId
    );
    const [finish] = taskColumns.filter(
      (item) => +item.id === +destination.droppableId
    );
    //Vertical
    if (start.id === finish.id) {
      const column = [...start.tasks];
      const [newOrder] = column.splice(source.index, 1);
      column.splice(destination.index, 0, newOrder);

      const checker = taskColumns.map((item) => {
        if (+item.id === +start.id) {
          return { ...item, tasks: column };
        }
        return item;
      });
      dispatch(updateTaskCol(checker));

      //Horizontal
    } else {
      const startCol = [...start.tasks];
      const [newPeace] = startCol.splice(source.index, 1);
      console.log(startCol);

      const finishCol = [...finish.tasks];
      finishCol.splice(destination.index, 0, newPeace);

      const horizontalColumn = taskColumns.map((item) => {
        if (+item.id === +start.id) {
          return { ...item, tasks: startCol };
        } else if (+item.id === +finish.id) {
          return { ...item, tasks: finishCol };
        } else {
          return item;
        }
      });
      dispatch(updateTaskCol(horizontalColumn));
    }
  };
  return (
    <div className={activeBoard}>
      <NavTitle />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="Dashboard__TaskBoard">
          {taskColumns.map((item, i) => (
            <TaskBoard key={item.id} columnTask={item} index={i} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
