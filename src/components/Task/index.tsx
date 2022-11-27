import React from "react";
import "./Task.scss";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Comments } from "../../assets/comments.svg";
const Task = () => {
  return (
    <div className="Task">
      <div className="Task__header">
        <h4 className="Task__title">UX develop</h4>
        <button className="Task__menu">
          <Edit />
        </button>
      </div>
      <p className="Task__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        nesciunt dolore quasi magni repellat enim, aliquid cum dolorum
        dignissimos voluptas voluptatem, veniam quae quod non delectus velit
        minus iure assumenda.
      </p>
      <div className="Task__comments">
        <button>
          <Comments />
          <p>32 comments</p>
        </button>
      </div>
    </div>
  );
};

export default Task;
