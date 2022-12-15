import { useRef } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { onModalEdit, onToggleModal } from "../../store/reducers/modalReducer";
import "./ModalWrapper.scss";
const ModalWrapper = ({ children }: { children: JSX.Element|JSX.Element[] }) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const onModalWrapper = (e: any) => {
    if (modalRef.current === e.target) {
      dispatch(onToggleModal(''));
      dispatch(onModalEdit(false))
    }
  };
  return (
    <div
      className="ModalWrapper"
      onClick={(e: any) => onModalWrapper(e)}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
