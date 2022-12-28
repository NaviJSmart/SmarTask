import { useAppSelector } from "../../hooks/redux";
import { modalSelector } from "../../store/reducers/modalReducer";
import BoardModal from "./BoardModal";
import ColumnModal from "./ColumnModal";
import TaskModal from "./TaskModal";

const Modal = () => {
  const { modalType } = useAppSelector(modalSelector);
  return (
    <>
      {modalType === "columnModal" ? <ColumnModal /> : null}
      {modalType === "taskModal" ? <TaskModal /> : null}
      {modalType === "boardModal" ? <BoardModal /> : null}
    </>
  );
};

export default Modal;
