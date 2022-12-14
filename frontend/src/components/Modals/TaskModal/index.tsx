import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import ModalWrapper from "../ModalWrapper";
import "../Modal.scss";
import "./TaskModal.scss";
import { createTask } from "../../../store/reducers/allBoardsReducer";
import { onToggleModal } from "../../../store/reducers/modalReducer";
interface TaskType {
  sub_title: string;
  description?: string;
}
const TaskModal = () => {
  const dispatch = useAppDispatch();
  const { modalType } = useAppSelector((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskType>();
  const onSubmit: SubmitHandler<TaskType> = (data) => {
    dispatch(createTask(data))
    dispatch(onToggleModal(""))
    reset();
  };
  return (
    <>
      {modalType === "createTask" ? (
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
              <button type="submit">Add Task</button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default TaskModal;
