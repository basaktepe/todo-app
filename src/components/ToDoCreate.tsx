import React from "react";

export default function ToDoCreate() {
  return (
    <div className="todo-create">
      <input
        type="text"
        placeholder="Enter to do..."
        className="todo-input"
      ></input>
      <button className="todo-button">Create to do!</button>
    </div>
  );
}
