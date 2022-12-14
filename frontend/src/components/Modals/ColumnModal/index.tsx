import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { onToggleModal } from "../../../store/reducers/modalReducer";
import ModalWrapper from "../ModalWrapper";
import "./ColumnModal.scss";
import "../Modal.scss";
import { createColumn } from "../../../store/reducers/allBoardsReducer";
interface ColumnTitleType {
  taskProcess: string;
  tasks: [];
}
const ColumnModal = () => {
  const dispatch = useAppDispatch();
  const { modalType } = useAppSelector((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ColumnTitleType>();
  const onSubmit: SubmitHandler<ColumnTitleType> = (data) => {
    dispatch(createColumn(data))
    dispatch(onToggleModal(""));
    reset();
  };

  return (
    <>
      {modalType === "createColumn" ? (
        <ModalWrapper>
          <div className="ColumnModal Modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Modal__field">
                <label htmlFor="column-title">Board title</label>
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

              <button type="submit">Add Column</button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default ColumnModal;
