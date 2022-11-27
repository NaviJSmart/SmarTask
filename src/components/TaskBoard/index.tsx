import React from "react";
import Task from "../Task";
import { ReactComponent as More } from "../../assets/more.svg";
import "./TaskBoard.scss";
const TaskBoard = () => {
  return (
    <div className="TaskBoard">
      <div className="TaskBoard__menu">
        <div className="TaskBoard__menu-group">
          <div className="TaskBoard__color"></div>
          <div className="TaskBoard__title">Doings</div>
        </div>

        <div className="TaskBoard__btn-more">
          <More />
        </div>
      </div>
      <div className="TaskBoard__Task">
        <Task />
        <Task />
      </div>
      <button className="TaskBoard__btn">ADD TASK</button>
    </div>
  );
};

export default TaskBoard;
