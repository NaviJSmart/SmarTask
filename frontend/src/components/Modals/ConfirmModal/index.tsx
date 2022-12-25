import { useAppDispatch, useAppSelector } from "../../../hooks/redux";


import ModalWrapper from "../ModalWrapper";
import "./ConfirmModal.scss";
const ConfirmModal = () => {
  const { modalType } = useAppSelector((state) => state.modalToggle);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {modalType === "confirmModal" ? (
        <ModalWrapper>
          <div className="ConfirmModal">
            <h4>Are you sure ?</h4>
            <div className="ConfirmModal__btn">
              <button >Delete</button>
              <button >Cancel</button>
            </div>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default ConfirmModal;
