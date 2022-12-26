import "./ConfirmModal.scss";
import { Options } from "react-confirm-box/dist/types";
const ConfirmModal: Options = {
  render: (message, onConfirm, onCancel) => {
    return (
      <div className="ConfirmModal">
        <h4>{message}</h4>
        <div className="ConfirmModal__btn">
          <button onClick={onConfirm}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  },
};

export default ConfirmModal;
