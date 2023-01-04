import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import "../Modal.scss";
import "./TaskModal.scss";
import {
  allBoardsSelector,
  createTask,
  deleteTask,
  editTask,
} from "../../../store/reducers/allBoardsReducer";
import {
  modalSelector,
  onModalEdit,
  onToggleModal,
} from "../../../store/reducers/modalReducer";
import { confirm } from "react-confirm-box";
import { Options } from "react-confirm-box/dist/types";
import ConfirmModal from "../ConfirmModal";
import ModalWrapper from "../ModalWrapper";
interface TaskType {
  sub_title: string;
  description: string;
}
const TaskModal = () => {
  let task: TaskType | undefined;
  const dispatch = useAppDispatch();
  const { modalEdit } = useAppSelector(modalSelector);
  const { selectedBoard, selectedColumn, selectedTask, boards } =
    useAppSelector(allBoardsSelector);
  if (modalEdit) {
    task = boards
      .find((board) => board.id === selectedBoard?.id)
      ?.columns.find((column) => column.id === selectedColumn)
      ?.tasks.find((task) => task.id === selectedTask);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TaskType>({ mode: "onChange" });

  useEffect(() => {
    if (task && modalEdit) {
      setValue("sub_title", task.sub_title);
      setValue("description", task.description);
    } else if (!modalEdit) {
      reset();
    }
  }, [task, modalEdit, reset, setValue]);

  const onSubmit: SubmitHandler<TaskType> = (data) => {
    const { description, sub_title } = data;
    if (modalEdit) {
      dispatch(
        editTask({
          boardId: selectedBoard?.id,
          columnId: selectedColumn,
          taskId: selectedTask,
          sub_title: sub_title,
          description: description.trim(),
        })
      );
    } else {
      dispatch(createTask(data));
    }
    dispatch(onToggleModal(""));
    dispatch(onModalEdit(false));
    reset();
  };

  const onDeleteHandler = async (options: Options) => {
    const result = await confirm("Are you sure ?", options);
    if (result) {
      dispatch(
        deleteTask({
          boardId: selectedBoard?.id,
          columnId: selectedColumn,
          taskId: selectedTask,
        })
      );
    }
  };

  return (
    <ModalWrapper>
      <div className="TaskModal Modal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Modal__field TaskModal__field">
            <label htmlFor="title">*Title</label>
            <input
              {...register("sub_title", {
                required: "This field is riquered",
                minLength: { value: 4, message: "Min length 4 charater" },
                maxLength: { value: 50, message: "Max length 50 character" },
                validate: (value) => !!value.trim(),
              })}
              type="text"
              id="title"
            />
            <div className="Modal__field_error">
              {errors && <span>{errors.sub_title?.message}</span>}
            </div>
          </div>
          <div className="Modal__field TaskModal__field">
            <label htmlFor="descr">Description</label>
            <textarea
              {...register("description", {
                minLength: { value: 6, message: "Min length 6 charater" },
                maxLength: { value: 500, message: "Max length 500 character" },
              })}
              id="descr"
            ></textarea>
            <div className="Modal__field_error">
              {errors && <span>{errors.description?.message}</span>}
            </div>
          </div>
          <div className="TaskModal__btn">
            <button type="submit">{modalEdit ? "Edit" : "Add"}</button>
            {modalEdit && (
              <button
                id="btn_delete"
                onClick={() => onDeleteHandler(ConfirmModal)}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default TaskModal;
