import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  allBoardsSelector,
  createBoard,
  editBoard,
  setSelectedBoard,
} from "../../../store/reducers/allBoardsReducer";
import {
  modalSelector,
  onModalEdit,
  onToggleModal,
} from "../../../store/reducers/modalReducer";
import ModalWrapper from "../ModalWrapper";
import "./BoardModal.scss";
import "../Modal.scss";
import { useEffect } from "react";
interface BoardTitleType {
  title: string;
}
const BoardModal = () => {
  const dispatch = useAppDispatch();
  const { modalEdit } = useAppSelector(modalSelector);
  const { selectedBoard } = useAppSelector(allBoardsSelector);

  const data = modalEdit ? selectedBoard : "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BoardTitleType>({ mode: "onChange" });
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
      dispatch(setSelectedBoard({ id: data.id, title: entity.title }));
    } else {
      dispatch(createBoard(entity));
    }
    dispatch(onModalEdit(false));
    dispatch(onToggleModal(""));
    reset();
  };

  return (
    <ModalWrapper>
      <div className="BoardModal Modal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Modal__field">
            <label htmlFor="board-title">Board title</label>
            <input
              {...register("title", {
                required: "This field is riquered",
                minLength: { value: 4, message: "Min length 4 charater" },
                validate: (value) => !!value.trim(),
              })}
              type="text"
              id="board-title"
            />
            <div className="Modal__field_error">
              {errors && <span>{errors.title?.message}</span>}
            </div>
          </div>
          <button type="submit">
            {modalEdit ? "Edit Board" : "Add Board"}
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default BoardModal;
