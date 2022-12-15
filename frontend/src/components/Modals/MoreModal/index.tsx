import React, { useRef } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { useOutsideModal } from "../../../hooks/useOutsideClose";
import {
  deleteBoard,
  deleteColumn,
  setSelectedBoard,
} from "../../../store/reducers/allBoardsReducer";
import { onModalEdit, onToggleModal } from "../../../store/reducers/modalReducer";
import "./MoreModal.scss";
interface MoreModalType {
  id: string;
  type: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoreModal = ({ id, type, setIsOpen }: MoreModalType) => {
  
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideModal(modalRef, setIsOpen);
  const onDeleteHandle = () => {
    if (type === "column") {
      dispatch(deleteColumn(id));
    } else if (type === "board") {
      dispatch(deleteBoard(id));
      dispatch(setSelectedBoard(null));
    }
    setIsOpen(false);
  };
  const onEditHandle = () => {
    dispatch(onModalEdit(true))
    if (type === "board") {
      dispatch(onToggleModal('createBoard'))
    }
    setIsOpen(false)
  };
  return (
    <div ref={modalRef} className="MoreModal">
      <button onClick={onEditHandle}>Edit</button>
      <button onClick={onDeleteHandle}>Delete</button>
    </div>
  );
};

export default MoreModal;
