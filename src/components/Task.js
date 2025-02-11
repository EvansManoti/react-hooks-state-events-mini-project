
import React from "react";

function Task() {
function Task({ task, onDelete }) {
  if(!task){
    return null;
  }
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">K</button>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(task)}>
        K
      </button>
    </div>
  );
}
}
export default Task
