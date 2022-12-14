import NavTitle from "../../components/NavTitle";
import TaskBoard from "../../components/TaskBoard";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Dashboard.scss";
import { OnDragEnd } from "../../utils/DragAndDrop";
import CreateColumn from "../../components/CreateColumnButton";

const Dashboard = () => {
  const { isHide } = useAppSelector((state) => state.menuToggle);

  const { selectedBoard, boards } = useAppSelector((state) => state.allBoards);
  const activeBoard = isHide ? "Dashboard Dashboard__full" : "Dashboard";
  const dispatch = useAppDispatch();
  const [taskCol] = boards.filter((board) => board.id === selectedBoard?.id);
  const taskColumns = taskCol?.columns || [];
  return (
    <div className={activeBoard}>
      <NavTitle />
      <DragDropContext
        onDragEnd={(res) =>
          OnDragEnd(res, {
            taskColumns,
            dispatch,
          })
        }
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              className="Dashboard__TaskBoard"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskColumns.map((item, i) => (
                <TaskBoard key={item.id} columnTask={item} idx={i} />
              ))}

              {provided.placeholder}
              {selectedBoard && <CreateColumn />}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;