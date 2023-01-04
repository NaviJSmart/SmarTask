import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  modalSelector,
  onModalEdit,
  onToggleModal,
} from "../../../store/reducers/modalReducer";
import "../Modal.scss";
import "./ColumnModal.scss";
import {
  allBoardsSelector,
  createColumn,
  editColumn,
} from "../../../store/reducers/allBoardsReducer";
import { useEffect } from "react";
import ModalWrapper from "../ModalWrapper";
interface ColumnTitleType {
  taskProcess: string;
  color: string;
}
const ColumnModal = () => {
  const dispatch = useAppDispatch();
  const { modalEdit } = useAppSelector(modalSelector);
  const { selectedBoard, selectedColumn, boards } =
    useAppSelector(allBoardsSelector);
  const column = boards
    .find((board) => board.id === selectedBoard?.id)
    ?.columns.find((col) => col.id === selectedColumn);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ColumnTitleType>({ mode: "onChange" });
  const onSubmit: SubmitHandler<ColumnTitleType> = (data) => {
    if (modalEdit) {
      dispatch(
        editColumn({
          boardId: selectedBoard?.id,
          columnId: selectedColumn,
          taskProcess: data.taskProcess,
          color: data.color,
        })
      );
    } else {
      dispatch(createColumn(data));
    }
    dispatch(onModalEdit(false));
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
    <ModalWrapper>
      <div className="ColumnModal Modal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Modal__field ColumnModal__field">
            <label>Column Color</label>
            <input {...register("color")} type="color" id="taskColor" />
          </div>
          <div className="Modal__field ColumnModal__field">
            <label htmlFor="column-title">Column Title</label>
            <input
              {...register("taskProcess", {
                required: "This field is riquered",
                minLength: { value: 4, message: "Min length 4 charater" },
                validate: (value) => !!value.trim(),
              })}
              type="text"
              id="column-title"
            />
            <div className="Modal__field_error">
              {errors && <span>{errors.taskProcess?.message}</span>}
            </div>
          </div>

          <button type="submit">
            {modalEdit ? "Edit Column" : "Add Column"}
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default ColumnModal;
