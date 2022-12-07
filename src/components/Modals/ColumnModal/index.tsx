import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { onToggleModal } from "../../../store/reducers/modalReducer";
import { postTaskColumns } from "../../../store/reducers/tasksReducer";
import ModalWrapper from "../ModalWrapper";
import "./ColumnModal.scss";
interface ColumnTitleType {
  taskProcess: string;
}
const ColumnModal = () => {
  const { selectedBoard } = useAppSelector((state) => state.dashboards);
  const dispatch = useAppDispatch();
  const { modalType } = useAppSelector((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ColumnTitleType>();
  const onSubmit: SubmitHandler<ColumnTitleType> = (data) => {
    if (selectedBoard) {
      dispatch(postTaskColumns({ id: selectedBoard.id, data }));
      dispatch(onToggleModal(""));
    }
    reset();
  };

  return (
    <>
      {modalType === "createColumn" ? (
        <ModalWrapper>
          <div className="ColumnModal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="ColumnModal__field">
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
              <button type="submit">Add board</button>
            </form>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default ColumnModal;
