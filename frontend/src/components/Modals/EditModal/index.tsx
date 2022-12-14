import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useOutsideModal } from "../../../hooks/useOutsideClose";
import {
  deleteBoard,
  deleteColumn,
  setSelectedBoard,
} from "../../../store/reducers/allBoardsReducer";
import "./EditModal.scss";
interface EditModalType {
  id: string;
  type: string;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}


const EditModal = ({ id, type, setIsOpen }: EditModalType) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  useOutsideModal(wrapperRef, setIsOpen)
  const onDeleteHandle = () => {
    if (type === "column") {
      dispatch(deleteColumn(id));
    } else if (type === "board") {
      dispatch(deleteBoard(id));
      dispatch(setSelectedBoard(null))
    }
    setIsOpen(false)
  };
  const onEditHandle = () => {};
  return (
    <div ref={wrapperRef} className="EditModal">
      <button>Edit</button>
      <button onClick={onDeleteHandle}>Delete</button>
    </div>
  );
};

export default EditModal;
