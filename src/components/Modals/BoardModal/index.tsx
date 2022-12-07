import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { createBoard } from "../../../store/reducers/boardsReducer";
import { onToggleModal } from "../../../store/reducers/modalReducer";
import ModalWrapper from "../ModalWrapper";
import "./BoardModal.scss";
interface BoardTitleType {
  title: string;
}
const BoardModal = () => {
  const dispatch = useAppDispatch()
  const { modalType } = useAppSelector((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BoardTitleType>();
  const onSubmit: SubmitHandler<BoardTitleType> = (data, e) => {
    dispatch(createBoard(data));
    dispatch(onToggleModal(''))
    reset()
  }
  return (
    <>
      {modalType === 'createBoard' ? (
        <ModalWrapper>
          <div className="BoardModal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="BoardModal__field">
                <label htmlFor="board-title">Board title</label>
                <input
                  {...register("title", {
                    required: "This field is riquered",
                    minLength: { value: 4, message: "Min length 4 charater" },
                  })}
                  type="text"
                  id="board-title"
                />
                {errors && <span>{errors.title?.message}</span>}
              </div>
              <button type="submit">Add board</button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default BoardModal;
