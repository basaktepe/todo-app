import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/slices/todoSlice";
import { TodoType } from "../types/Types";

export default function ToDoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Please enter to do!");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        type="text"
        placeholder="Enter to do..."
        className="todo-input"
      ></input>
      <button onClick={handleCreateTodo} className="todo-button">
        Create to do!
      </button>
    </div>
  );
}
