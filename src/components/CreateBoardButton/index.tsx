import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { onToggleModal } from "../../store/reducers/modalReducer";

import "./CreateBoard.scss";

const CreateBoard = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="CreateBoard">
      <button onClick={() => dispatch(onToggleModal())}>+Create New Board</button>
    </div>
  );
};

export default CreateBoard;
