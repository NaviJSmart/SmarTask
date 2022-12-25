import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  createBoard,
  editBoard,
  setSelectedBoard,
} from "../../../store/reducers/allBoardsReducer";
import { onModalEdit, onToggleModal } from "../../../store/reducers/modalReducer";
import ModalWrapper from "../ModalWrapper";
import "./BoardModal.scss";
import "../Modal.scss";
import { useEffect } from "react";
interface BoardTitleType {
  title: string;
}
const BoardModal = () => {
  const dispatch = useAppDispatch();
  const { modalType, modalEdit } = useAppSelector((state) => state.modalToggle);
  const { selectedBoard } = useAppSelector((state) => state.allBoards);
  
  const data = modalEdit ? selectedBoard : "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BoardTitleType>();
  useEffect(() => {
    if (data && modalEdit) {
      setValue("title", data.title);
    } else if (!modalEdit) {
      reset();
    }
  }, [data, modalEdit, reset, setValue]);
  const onSubmit: SubmitHandler<BoardTitleType> = (entity) => {
    if (modalEdit && data) {
      dispatch(editBoard({ id: data.id, title: entity.title }));
      dispatch(setSelectedBoard({id: data.id, title: entity.title}))
    } else {
      dispatch(createBoard(entity));
    }
    dispatch(onModalEdit(false))
    dispatch(onToggleModal(""));
    reset()
  };

  return (
    <>
      {modalType === "boardModal" ? (
        <ModalWrapper>
          <div className="BoardModal Modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Modal__field">
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
              <button type="submit">
                {modalEdit ? "Edit Board" : "Add Board"}
              </button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default BoardModal;
