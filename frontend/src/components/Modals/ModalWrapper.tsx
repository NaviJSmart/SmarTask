import { useRef } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { onModalEdit, onToggleModal } from "../../store/reducers/modalReducer";
import "./ModalWrapper.scss";
type childrenType = {
  children: JSX.Element | JSX.Element[] | null;
};
const ModalWrapper = ({ children }:childrenType) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const onModalWrapper = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      dispatch(onToggleModal(""));
      dispatch(onModalEdit(false));
    }
  };
  return (
    <div
      className="ModalWrapper"
      onClick={(e) => onModalWrapper(e)}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
