import { useState } from "react";
import { ReactComponent as MoreSVG } from "../../assets/more.svg";
import EditModal from "../Modals/EditModal";
import "./MoreButton.scss";
const MoreButton = ({ id, type }: { id: string; type: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandle = () => {
    setIsOpen(true);
  };
  
  return (
    <div className="MoreButton">
      <button onClick={onClickHandle} style={isOpen ? {pointerEvents: "none"} : {}}>
        <MoreSVG />
      </button>
      {isOpen ? <EditModal id={id} setIsOpen={setIsOpen} type={type} /> : null}
    </div>
  );
};

export default MoreButton;
