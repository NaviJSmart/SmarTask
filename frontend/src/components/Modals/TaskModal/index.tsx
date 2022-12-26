import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import ModalWrapper from "../ModalWrapper";
import "../Modal.scss";
import "./TaskModal.scss";
import {
  createTask,
  deleteTask,
  editTask,
} from "../../../store/reducers/allBoardsReducer";
import {
  onModalEdit,
  onToggleModal,
} from "../../../store/reducers/modalReducer";
import { confirm } from "react-confirm-box";
import { Options } from "react-confirm-box/dist/types";
import ConfirmModal from "../ConfirmModal";
interface TaskType {
  sub_title: string;
  description: string;
}
const TaskModal = () => {
  let task: TaskType | undefined;
  const dispatch = useAppDispatch();
  const { modalType, modalEdit } = useAppSelector((state) => state.modalToggle);
  const { selectedBoard, selectedColumn, selectedTask, boards } =
    useAppSelector((state) => state.allBoards);
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
  } = useForm<TaskType>();

  useEffect(() => {
    if (task && modalEdit) {
      setValue("sub_title", task.sub_title);
      setValue("description", task.description);
    } else if (!modalEdit) {
      reset();
    }
  }, [task, modalEdit, reset, setValue]);

  const onSubmit: SubmitHandler<TaskType> = (data) => {
    if (modalEdit) {
      dispatch(
        editTask({
          boardId: selectedBoard?.id,
          columnId: selectedColumn,
          taskId: selectedTask,
          sub_title: data.sub_title,
          description: data.description,
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
    <>
      {modalType === "taskModal" ? (
        <ModalWrapper>
          <div className="TaskModal Modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Modal__field TaskModal__field">
                <label htmlFor="title">*Title</label>
                <input
                  {...register("sub_title", {
                    required: "This field is riquered",
                    minLength: { value: 4, message: "Min length 4 charater" },
                  })}
                  type="text"
                  id="title"
                />
                {errors && <span></span>}
              </div>
              <div className="Modal__field TaskModal__field">
                <label htmlFor="descr">Description</label>
                <textarea
                  {...register("description", {
                    minLength: { value: 6, message: "Min length 4 charater" },
                  })}
                  id="descr"
                ></textarea>
                {errors && <span></span>}
              </div>
              <div className="TaskModal__btn">
                <button type="submit">
                  {modalEdit ? "Edit Task" : "Add Task"}
                </button>
                {modalEdit && (
                  <button
                    id="btn_delete"
                    onClick={() => onDeleteHandler(ConfirmModal)}
                  >
                    Delete Task
                  </button>
                )}
              </div>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default TaskModal;
