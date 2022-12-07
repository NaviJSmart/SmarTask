import { useAppDispatch } from "../../hooks/redux";
import { onToggleModal } from "../../store/reducers/modalReducer";
import "./CreateColumn.scss";
const CreateColumn = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="CreateColumn">
      <button onClick={() => dispatch(onToggleModal('createColumn'))}>+ New Column</button>
    </div>
  );
};

export default CreateColumn;
