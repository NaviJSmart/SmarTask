import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { onModalEdit, onToggleModal } from "../../../store/reducers/modalReducer";
import ModalWrapper from "../ModalWrapper";
import "./ColumnModal.scss";
import "../Modal.scss";
import {
  createColumn,
  editColumn,
} from "../../../store/reducers/allBoardsReducer";
import { useEffect } from "react";
interface ColumnTitleType {
  taskProcess: string;
  color: string;
}
const ColumnModal = () => {
  const dispatch = useAppDispatch();
  const { modalType, modalEdit } = useAppSelector((state) => state.modalToggle);
  const { selectedBoard, selectedColumn, boards } = useAppSelector(
    (state) => state.allBoards
  );
  const column = boards
    .find((board) => board.id === selectedBoard?.id)
    ?.columns.find((col) => col.id === selectedColumn);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ColumnTitleType>();
  const onSubmit: SubmitHandler<ColumnTitleType> = (data) => {
    if (modalEdit) {
      dispatch(
        editColumn({
          boardId: selectedBoard?.id,
          columnId: selectedColumn,
          taskProcess: data.taskProcess,
          color: data.color
        })
      );
    } else {
      dispatch(createColumn(data));
    }
    dispatch(onModalEdit(false))
    dispatch(onToggleModal(""));
    reset();
  };
  useEffect(() => {
    if (column && modalEdit) {
      setValue("taskProcess", column.taskProcess);
      setValue("color", column.color);
    } else if (!modalEdit) {
      reset();
    }
  }, [column, modalEdit, setValue, reset]);

  return (
    <>
      {modalType === "columnModal" ? (
        <ModalWrapper>
          <div className="ColumnModal Modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Modal__field ColumnModal__field">
              <label htmlFor="taskColor">Column Color</label>
                <input {...register("color")} type="color" id="taskColor"/>
              </div>
              <div className="Modal__field ColumnModal__field">
                <label htmlFor="column-title">Column Title</label>
                <input
                  {...register("taskProcess", {
                    required: "This field is riquered",
                    minLength: { value: 4, message: "Min length 4 charater" },
                  })}
                  type="text"
                  id="column-title"
                />
                {errors && <span></span>}
              </div>

              <button type="submit">{modalEdit ? 'Edit Column' : 'Add Column'}</button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default ColumnModal;
