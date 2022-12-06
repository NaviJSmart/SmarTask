import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { createBoard } from "../../../store/reducers/boardsReducer";
import ModalWrapper from "../ModalWrapper";
import "./BoardModal.scss";
interface BoardTitleType {
  title: string;
}
const BoardModal = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardTitleType>();
  const onSubmit: SubmitHandler<BoardTitleType> = (data) => console.log(data);
  
  return (
    <>
      {isOpen ? (
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
