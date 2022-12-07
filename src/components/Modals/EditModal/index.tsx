import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { deleteTaskColumn } from "../../../store/reducers/tasksReducer";
import "./EditModal.scss";
const EditModal = ({ columnId }: { columnId: string }) => {
  const { selectedBoard } = useAppSelector((state) => state.dashboards);

  const dispatch = useAppDispatch();
  const onDeleteHandle = () => {
    if (selectedBoard) {
      dispatch(deleteTaskColumn({ columnId, boardId: selectedBoard.id }));
    }
  };
  return (
    <div className="EditModal">
      <button>Edit</button>
      <button onClick={onDeleteHandle}>Delete</button>
    </div>
  );
};

export default EditModal;
